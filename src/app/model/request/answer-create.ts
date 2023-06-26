export class AnswerCreate {
  content: string;
  correct: boolean;


  constructor(content: string, correct: boolean) {
    this.content = content;
    this.correct = correct;
  }
}
