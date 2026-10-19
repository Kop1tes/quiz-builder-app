import express from "express";
import { createQuiz, getQuizzes } from "../controllers/quizController";
const router = express.Router();
router.get("/quizzes", getQuizzes);
router.post("/quizzes", createQuiz);
export default router;
//# sourceMappingURL=index.js.map