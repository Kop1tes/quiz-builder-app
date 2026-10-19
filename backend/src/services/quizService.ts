import type { Quiz } from "../types/quiz";
import {prisma} from "../lib/prisma";

export const getQuizzes = async () => {
    const quizzes = await prisma.quiz.findMany();

    return quizzes;
}

export const createQuiz = (title: string ): Quiz => {
    const newQuiz: Quiz = {
        id: crypto.randomUUID(),
        title: title,
    };

    quizzes.push(newQuiz);
    
    return newQuiz;
}