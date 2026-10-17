export type Quiz = {
    id: string;
    title: string;
}

export type Question = {
    id: string;
    quizId: string;
    text: string;
    type: "boolean" | "input" | "checkbox";
    options?: string[];
}