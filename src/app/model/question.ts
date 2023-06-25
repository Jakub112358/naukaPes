export interface Question {
  id: number;
  content: string;
  answers:[
    id:number,
    content:string
  ][];
  rightAnswer: number;
  exam: [
    id: number,
    content: string
  ];
  tags: [
    id:number,
    content:string
  ][];
}
