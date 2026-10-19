const quizzes = [];
export const getQuizzes = () => {
    return quizzes;
};
export const createQuiz = (title) => {
    const newQuiz = {
        id: crypto.randomUUID(),
        title: title,
    };
    quizzes.push(newQuiz);
    return newQuiz;
};
//# sourceMappingURL=quizService.js.map