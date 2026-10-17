import type { Quiz } from "../types/quiz";

const quizzes: Quiz[] = [];

export const getQuizzes = (): Quiz[] => {
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