import {Component} from '@angular/core';
import {Question} from "../../../model/question";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  showAnswerCorrect: boolean = false;
  showAnswerWrong: boolean = false;
  question: Question;
  question1: Question = {
    id: 1,
    content: "Ile nóg ma stonoga?",
    rightAnswer: 2,
    answers: [
      [1, "10"],
      [2, "14"],
      [3, "100"],
      [4, "1500"],
    ],
    exam: [1,"wiosna 2050"],
    tags: [
      [1,"przyra"],
      [2, "głupie pytania"],
      [3, "dermoskopia"]
    ]
  }
  question2: Question = {
    id: 2,
    content: "Co jest stolicą Trynidadu i Tobago",
    rightAnswer: 3,
    answers: [
      [1, "Beznazwa"],
      [2, "Honolulu"],
      [3, "Port of Spain"],
      [4, "Wyszyna"],
      [5, "Szczebrzeszyn"],
    ],
    exam: [2,"zima 1410"],
    tags: [
      [1,"gegra"],
      [2, "głupie pytania"],
      [3, "wenery"]
    ]
  }


  constructor() {
    this.question = this.question1
  }

  checkAnswer(id: number) {
    if (this.question.rightAnswer === id) {
      this.showAnswerCorrect = true;
      this.showAnswerWrong = false;
    } else {
      this.showAnswerCorrect = false;
      this.showAnswerWrong = true;
    }
  }

  getRightAnswerContent() {
    let answer: string = '';
    this.question.answers.forEach(value => {
      if (value[0] === this.question.rightAnswer) {
        answer = value[1];
      }
    })
    return answer;
  }

  nextQuestion() {
    this.showAnswerWrong = false;
    this.showAnswerCorrect = false;
    if (this.question.id === 1) {
      this.question = this.question2;
    } else {
      this.question = this.question1;
    }
  }
}
