import express from "express";
import { startQuiz, submitQuiz } from "../controllers/quizController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/start", authMiddleware, startQuiz);
router.post("/submit", authMiddleware, submitQuiz);

export default router;
