import { Answer } from './answer.interface';

export interface Question {
  textPl: string;
  textRu: string;
  answered?: number;
  isMultiple?: boolean;
  image?: string;
  answers: Answer[];
}

