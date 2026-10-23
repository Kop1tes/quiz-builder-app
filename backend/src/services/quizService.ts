import { prisma } from "../lib/prisma";

export const getQuizzes = async () => {
    const quizzes = await prisma.quiz.findMany();

    return quizzes;
}

type QuestionInput = {
    text: string,
    type: string,
    options?: string[],
}

export const createQuiz = async (title: string, questions: QuestionInput[]) => {
    const newQuiz = await prisma.quiz.create({
        data: {
            title,
            questions: {
                create: [
                    {text: "Что такое TypeScript?", type:"text"},
                ]
            }
        }
    }
    );
    
    return newQuiz;
}