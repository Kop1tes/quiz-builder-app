import { Request, Response } from "express";
import { getQuizzes as getQuizzesService} from "../services/quizService";

export const getQuizzes = (req: Request, res: Response) => {
    const quizzes = getQuizzesService();
    res.json(quizzes);
}