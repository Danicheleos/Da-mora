import { Answer } from './answer.interface';

export interface Question {
  text: string;
  answered?: number;
  isMultiple?: boolean;
  image?: string;
  answers: Answer[];
}
