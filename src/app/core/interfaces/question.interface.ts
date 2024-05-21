import { Answer, AnswerOld } from './answer.interface';

export interface QuestionOld {
  text: string;
  answered?: number;
  isMultiple?: boolean;
  image?: string;
  answers: AnswerOld[];
}

export interface Question {
  textPl: string;
  textRu: string;
  answered?: number;
  isMultiple?: boolean;
  image?: string;
  answers: Answer[];
}

