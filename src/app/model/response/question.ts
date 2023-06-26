import {Answer} from "./answer";

export class Question {
  id: number;
  content: string;
  examDate: Date;
  difficulty: string;
  categories: string[];
  answers: Answer[];
}
