import { create } from "zustand";
import { QuizGameInfo } from "../types/quiz";

interface QuizStore {
  userAnswers: QuizGameInfo;
  setUserAnswers: (newUserAnswers: QuizGameInfo) => void;
}

export const useQuizStore = create<QuizStore>(set => ({
  userAnswers: { correct: 0, incorrect: 0 },
  setUserAnswers: newUserAnswers =>
    set(state => ({
      userAnswers: newUserAnswers,
    })),
}));
