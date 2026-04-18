Build a fully functional Fake News Detector web application using the MERN stack (MongoDB optional), integrating Google Gemini API for AI-powered analysis. The app should support both text-based and image-based fake news detection, and include a modern, professional UI with Three.js 3D elements and GSAP animations.

🔥 Core Features

1. Text Fake News Detection:

- User inputs news text
- Send to backend API
- Use Gemini API to classify as Fake / Real / Uncertain
- Return JSON response:
  {
  "verdict": "",
  "confidence": "",
  "reason": ""
  }

2. Image Fake Detection:

- Upload image (drag & drop UI)
- Convert to base64
- Send to backend
- Use Gemini Vision (gemini-1.5-flash)
- Same JSON output format

---

🧠 Backend (Node.js + Express)

- Create REST API:
  POST /analyze-text
  POST /analyze-image

- Use axios to call Gemini API:
  
  - Text model: gemini-pro
  - Vision model: gemini-1.5-flash

- Use dotenv for API key

- Prompt for text:
  "You are a fake news detector. Analyze the news and respond STRICTLY in JSON with verdict (Fake/Real/Uncertain), confidence (0-100%), and reason."

- Prompt for image:
  "Analyze this image and determine if it is AI-generated or manipulated. Respond STRICTLY in JSON."

---

🎨 Frontend (React)

- Pages:
  
  - Home Page
  - Detector Page

- Components:
  
  - TextInputBox
  - ImageUploader
  - ResultCard (verdict, confidence, reason)
  - Loader Spinner

- Use Axios for API calls

---

✨ UI/UX Requirements

1. Use Tailwind CSS for styling
2. Dark theme with glassmorphism cards
3. Responsive design

---

🎥 Three.js Integration

- Add a 3D animated background:
  - Floating particles or rotating globe
  - Canvas full screen
  - Subtle movement (low CPU usage)

---

⚡ GSAP Animations

- Page load fade-in
- Button hover effects
- Result card slide-up animation
- Smooth transitions between states

---

🧩 Extra Features (if time permits)

- Show confidence as progress bar
- Color coding:
  - Green → Real
  - Red → Fake
  - Yellow → Uncertain
- Copy result button

---

📁 Folder Structure

/client (React)
/components
/pages
/server
server.js
routes/
controllers/

---

🔐 Environment Variables

GEMINI_API_KEY=your_api_key_here

---

🚀 Final Output

- Fully working UI
- API connected
- Real-time fake news detection
- Clean, modern design
- Ready for hackathon demo

---

🧠 Important Notes

- Do NOT build ML model
- Use Gemini API only
- Focus on working demo, not perfection
- Ensure responses are parsed and displayed cleanly

---

🎯 Goal

Create a visually impressive, fully working AI-powered Fake News Detector that can analyze both text and images in real-time with explainable outputs.
