export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum QuestionType {
  MULTIPLE = 'multiple',
  BOOLEAN = 'boolean',
}

export type Question = {
  id: string;
  category: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  answers: Array<string>;
};
