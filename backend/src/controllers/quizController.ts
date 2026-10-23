import { Request, Response } from "express";
import { getQuizzes as getQuizzesService } from "../services/quizService";
import { createQuiz as createQuizService } from "../services/quizService";

export const getQuizzes = async(req: Request, res: Response) => {
    const quizzes = await getQuizzesService();
    res.json(quizzes);
}

export const createQuiz = async (req: Request, res: Response) => {
    const { title, questions } = req.body;

    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "Invalid title" });
    }

    if (!Array.isArray(questions)) {
        return res.status(400).json({message: "Invalid questions"})
    }

    const quiz = await createQuizService(title, questions);
    
    return res.status(201).json(quiz);
}