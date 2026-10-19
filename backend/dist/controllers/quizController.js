import { getQuizzes as getQuizzesService } from "../services/quizService";
import { createQuiz as createQuizService } from "../services/quizService";
export const getQuizzes = (req, res) => {
    const quizzes = getQuizzesService();
    res.json(quizzes);
};
export const createQuiz = (req, res) => {
    const { title } = req.body;
    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "Invalid title" });
    }
    const quiz = createQuizService(title);
    return res.status(201).json(quiz);
};
//# sourceMappingURL=quizController.js.map