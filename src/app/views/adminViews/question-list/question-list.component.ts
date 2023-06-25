import { Component } from '@angular/core';
import {Question} from "../../../model/question";
import {QuestionService} from "../../../service/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
  questions: Question[];

  constructor(
    private questionService: QuestionService
  ) {
  }

  ngOnInit(){
    this.questionService.findAll().subscribe(data => {
      this.questions = data;
    })
  }
}
