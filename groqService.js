import axios from "axios";

const GROQ_BASE_URL = "https://api.groq.com/openai/v1/chat/completions";
const TEXT_MODEL = "llama-3.3-70b-versatile";
const VISION_MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";

const fallbackResult = {
  verdict: "Uncertain",
  confidence: "0%",
  reason: "The AI response could not be parsed into the expected JSON format.",
};

function getApiKey() {
  if (!process.env.GROQ_API_KEY) {
    const error = new Error("GROQ_API_KEY is missing. Add it to server/.env.");
    error.status = 500;
    throw error;
  }
  return process.env.GROQ_API_KEY;
}

function normalizeVerdict(verdict) {
  const value = String(verdict || "Uncertain").toLowerCase();
  if (value.includes("fake")) return "Fake";
  if (value.includes("real") || value.includes("true")) return "Real";
  return "Uncertain";
}

function normalizeConfidence(confidence) {
  const numeric = Number(String(confidence || "").match(/\d+(\.\d+)?/)?.[0] || 0);
  const clamped = Math.max(0, Math.min(100, Math.round(numeric)));
  return `${clamped}%`;
}

function parseGroqJson(rawText) {
  if (!rawText) return fallbackResult;

  const cleaned = rawText
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  const jsonText = jsonMatch ? jsonMatch[0] : cleaned;

  try {
    const parsed = JSON.parse(jsonText);
    return {
      verdict: normalizeVerdict(parsed.verdict),
      confidence: normalizeConfidence(parsed.confidence),
      reason: String(parsed.reason || "No reason provided.").trim(),
    };
  } catch {
    return {
      ...fallbackResult,
      reason: cleaned.slice(0, 400) || fallbackResult.reason,
    };
  }
}

async function callGroqAPI(messages, model) {
  const apiKey = getApiKey();

  try {
    const { data } = await axios.post(
      GROQ_BASE_URL,
      {
        model,
        messages,
        temperature: 0.2,
        max_tokens: 1024,
        response_format: { type: "json_object" },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 30000,
      }
    );

    const content = data.choices[0].message.content;
    return parseGroqJson(content);
  } catch (error) {
    const status = error.response?.status || 502;
    const message = error.response?.data?.error?.message || error.message;
    const groqError = new Error(`Groq API error (${status}): ${message}`);
    groqError.status = status >= 500 ? 502 : status;
    throw groqError;
  }
}

export async function callGroqText(newsText) {
  const messages = [
    {
      role: "system",
      content: "You are a fake news detector. Analyze the news and respond STRICTLY in JSON with verdict (Fake/Real/Uncertain), confidence (0-100%), and reason.",
    },
    {
      role: "user",
      content: `Analyze this news text:\n\n${newsText}`,
    },
  ];

  return callGroqAPI(messages, TEXT_MODEL);
}

export async function callGroqImage(imageBase64, mimeType) {
  const messages = [
    {
      role: "system",
      content: "You are an AI image verification specialist. Analyze the provided image and determine if it is likely AI-generated, manipulated, or fake news context. Respond STRICTLY in JSON with verdict (Fake/Real/Uncertain), confidence (0-100%), and reason.",
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Analyze this image and determine its authenticity.",
        },
        {
          type: "image_url",
          image_url: {
            url: `data:${mimeType};base64,${imageBase64}`,
          },
        },
      ],
    },
  ];

  return callGroqAPI(messages, VISION_MODEL);
}
