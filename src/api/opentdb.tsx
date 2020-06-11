import axios from "axios";
import he from "he";

const opentdb = axios.create({
    baseURL: "https://opentdb.com",
});

if (!localStorage.getItem("opentdb_token")) {
    opentdb.get("/api_token.php?command=request").then(res => {
        if (res.data.response_code === 0) {
            localStorage.setItem("opentdb_token", res.data.token);
        }
    });
}

export const fetchQuestions = (amount: number, difficulty?: Difficulty, categoryId?: number) => {
    const categoryStr = categoryId ? `&category=${categoryId}` : '';
    const difficultyStr = difficulty ? `&difficulty=${difficulty}` : '';
    const token = localStorage.getItem("opentdb_token");

    return opentdb.get(`/api.php?amount=${amount}${difficultyStr}${categoryStr}&token=${token}`).then(res => {
        const questions = res.data.results;
        console.log(questions);
        questions.forEach((q: Question) => {
            q.question = he.decode(q.question);
            q.correct_answer = he.decode(q.correct_answer);
            q.incorrect_answers = q.incorrect_answers.map(ans => he.decode(ans));
        });
        console.log(questions);
        return questions;
    });
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

enum QuestionType {
    MULTIPLE = "multiple",
    BOOLEAN = "boolean"
}

type Question = {
    category: string,
    type: QuestionType,
    difficulty: Difficulty,
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>,
}