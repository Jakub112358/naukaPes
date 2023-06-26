export class QuestionUpdate {
  content: string;
  examDate: any;
  difficulty: string;
  categories: string[];


  constructor(content: string, examDate: any, difficulty: string, categories: string[]) {
    this.content = content;
    this.examDate = examDate;
    this.difficulty = difficulty;
    this.categories = categories;
  }
}
