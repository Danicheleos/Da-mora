import { Answer } from './answer.interface';

export interface Question {
  index?: number;
  textPl: string;
  textRu: string;
  answered?: number;
  isMultiple?: boolean;
  image?: string;
  answers: Answer[];
}

