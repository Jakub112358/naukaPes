import {Component} from '@angular/core';
import {Question} from "../../../model/response/question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import {QuestionUpdate} from "../../../model/request/question-update";
import {Difficulties} from "../../../model/enumerated/difficulties";
import {Categories} from "../../../model/enumerated/categories";
import {Answer} from "../../../model/response/answer";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent {
  question: Question;
  editContentModalVisible: boolean;
  editDateModalVisible: boolean;
  editDifficultyModalVisible: boolean;
  editCategoriesModalVisible: boolean;
  deleteQuestionModalVisible: boolean;
  deleteAnswerModalVisible: boolean;
  addAnswerModalVisible: boolean;
  failModalVisible: boolean;
  fieldToUpdate: any;
  difficulties: string[];
  categories: string[];
  answerToDelete: Answer;



  constructor(private activatedRoute: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadQuestion();
    this.difficulties = Object.values(Difficulties);
    this.categories = Object.values(Categories);
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

  showDeleteQuestionModal() {
    this.deleteQuestionModalVisible = true;
  }

  showDeleteAnswerModal(answer: Answer) {
    this.answerToDelete = answer;
    this.deleteAnswerModalVisible = true;
  }

  showAddAnswerModal() {
    this.addAnswerModalVisible = true;
  }

  showEditContentModal() {
    this.fieldToUpdate = this.question.content;
    this.editContentModalVisible = true;
  }

  showEditDateModal() {
    this.fieldToUpdate = this.question.examDate;
    this.editDateModalVisible = true;
  }

  showEditDifficultyModal() {
    this.fieldToUpdate = this.question.difficulty;
    this.editDifficultyModalVisible = true;
  }

  showEditCategoriesModal() {
    this.fieldToUpdate = this.question.categories;
    this.editCategoriesModalVisible = true;
  }

  onSubmitEditContent() {
    let updateRequest = new QuestionUpdate(this.fieldToUpdate, this.question.examDate, this.question.difficulty, this.question.categories);
    this.sendUpdateRequest(updateRequest);
    this.editContentModalVisible = false;
  }

  onSubmitEditDate() {
    let updatedDate = this.dateToString(this.fieldToUpdate);
    let updateRequest = new QuestionUpdate(this.question.content, updatedDate, this.question.difficulty, this.question.categories);
    this.sendUpdateRequest(updateRequest);
    this.editDateModalVisible = false;
  }

  onSubmitEditDifficulty() {
    let updateRequest = new QuestionUpdate(this.question.content, this.question.examDate, this.fieldToUpdate, this.question.categories);
    this.sendUpdateRequest(updateRequest);
    this.editDifficultyModalVisible = false;
  }

  onSubmitEditCategories() {
    let updateRequest = new QuestionUpdate(this.question.content, this.question.examDate, this.question.difficulty, this.fieldToUpdate);
    this.sendUpdateRequest(updateRequest);
    this.editCategoriesModalVisible = false;
  }

  categoryToDisplayString(cat: string){
    return cat.toLowerCase().replace('_',' ');
  }

  private sendUpdateRequest(updateRequest: QuestionUpdate) {
    let id = this.getId()
    this.questionService.update(id, updateRequest).subscribe(
      data => {
        if (data) {
          this.question = data;
        } else {
          this.failModalVisible = true;
        }
      }
    );
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }


  deleteQuestion() {
    this.questionService.delete(this.getId()).subscribe(() =>
      this.router.navigateByUrl('/admin/questions')
    );
  }

  showEditAnswerModal() {

  }

  deleteAnswer() {
    this.questionService.deleteAnswer(this.getId(), this.answerToDelete.id).subscribe(() =>
      this.loadQuestion()
    );
    this.deleteAnswerModalVisible = false
  }
}
