export interface QuizGameInfo {
  correct: number;
  incorrect: number;
}

export interface QuizGameHint {
  isCorrect: boolean;
  message: string;
}
