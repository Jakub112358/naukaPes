import {AnswerCreate} from "./answer-create";

export class QuestionCreate {
  content: string;
  examDate: any;
  difficulty: string;
  categories: string[];
  answers: AnswerCreate[];
}
