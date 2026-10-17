import { Request, Response } from "express";
import { getQuizzes as getQuizzesService } from "../services/quizService";
import { createQuiz as createQuizService } from "../services/quizService";

export const getQuizzes = (req: Request, res: Response) => {
    const quizzes = getQuizzesService();
    res.json(quizzes);
}

export const createQuiz = (req: Request, res: Response) => {
    const { title } = req.body;

    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "Invalid title" });
    }

    const quiz = createQuizService(title);
    
    return res.status(201).json(quiz);
}