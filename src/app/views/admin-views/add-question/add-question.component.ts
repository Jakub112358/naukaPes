import {Component} from '@angular/core';
import {QuestionCreate} from "../../../model/request/question-create";
import {Difficulties} from "../../../model/enumerated/difficulties";
import {Categories} from "../../../model/enumerated/categories";
import {AnswerCreate} from "../../../model/request/answer-create";
import {Router} from "@angular/router";
import {QuestionService} from "../../../service/question.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  questionCreate: QuestionCreate;
  difficulties: string[];
  categories: string[];
  failModalVisible: boolean;
  successModalVisible: boolean;
  answerCorrectOptions: any[];
  addedQuestionPath: string;


  constructor(private router: Router,
              private questionService: QuestionService) {
  }

  ngOnInit() {
    this.createNewQuestionCreate();
    this.difficulties = Object.values(Difficulties);
    this.categories = Object.values(Categories);
    this.answerCorrectOptions = [
      {label: 'poprawna', value: true},
      {label: 'błędna', value: false}
    ]
  }

  onSubmit() {
    let valid = this.validateRequest(this.questionCreate);
    if (valid) {
      this.questionCreate.examDate = this.dateToString(this.questionCreate.examDate)
      this.sendCreateQuestionRequest(this.questionCreate);
    } else {
      this.failModalVisible = true;
    }

  }

  private sendCreateQuestionRequest(createRequest: QuestionCreate) {
    this.questionService.save(createRequest).subscribe(
      data => {
        this.createNewQuestionCreate();
        if (data) {
          this.addedQuestionPath = '/admin/questions/' + data.id;
          this.successModalVisible = true;
        } else {
          this.failModalVisible = true;
        }
      }
    );
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

  categoryToDisplayString(cat: string) {
    return cat.toLowerCase().replace('_', ' ');
  }

  private validateRequest(questionCreate: QuestionCreate) {
    return (questionCreate.content && questionCreate.examDate && questionCreate.difficulty && questionCreate.categories)
  }

  addNewAnswer() {
    this.questionCreate.answers.push(new AnswerCreate('', false))
  }

  private createNewQuestionCreate() {
    this.questionCreate = new QuestionCreate();
    this.questionCreate.answers = [];
    this.addNewAnswer();
  }
}
