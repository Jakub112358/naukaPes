import {Component} from '@angular/core';
import {Question} from "../../../model/question";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../service/question.service";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent {
  question: Question;
  editModalVisible: boolean;
  deleteQuestionModalVisible: boolean;
  deleteAnswerModalVisible: boolean;
  addAnswerModalVisible: boolean;



  constructor(private activatedRoute: ActivatedRoute,
              private questionService: QuestionService) {
  }

  ngOnInit() {
    this.loadQuestion();
  }

  private loadQuestion() {
    let id = this.getId();

    this.questionService.findById(id).subscribe(data => {
      this.question = data;
    })
  }

  private getId() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  showEditModal() {
    this.editModalVisible = true;
  }

  showDeleteQuestionModal() {
    this.deleteQuestionModalVisible = true;
  }

  showDeleteAnswerModal() {
    this.deleteAnswerModalVisible = true;
  }

  showAddAnswerModal() {
    this.addAnswerModalVisible = true;
  }
}
