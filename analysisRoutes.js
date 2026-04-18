import { Router } from "express";
import { analyzeImage, analyzeText } from "../controllers/analysisController.js";

const router = Router();

router.post("/analyze-text", analyzeText);
router.post("/analyze-image", analyzeImage);

export default router;
