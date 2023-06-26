import {Component} from '@angular/core';
import {Question} from "../../../model/question";
import {QuestionService} from "../../../service/question.service";
import {QuestionSearchCriteria} from "../../../model/question-search-criteria";
import {Difficulties} from "../../../model/enumerated/difficulties";
import {Categories} from "../../../model/enumerated/categories";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
  questions: Question[];
  criteriaModalVisible: boolean;
  idSearchModalVisible: boolean;
  criteria: QuestionSearchCriteria;
  selectedId: number;
  difficulties: string[];
  categories: string[];

  constructor(
    private questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.criteria = new QuestionSearchCriteria();
    this.difficulties = Object.values(Difficulties);
    this.categories = Object.values(Categories);
  }

  fetchAllQuestions() {
    this.questionService.findAll().subscribe(data => {
      this.questions = data;
    })
  }

  onSubmit() {
    if (this.criteria.examDateFrom) {
      this.criteria.examDateFrom = this.dateToString(this.criteria.examDateFrom);
    }
    if (this.criteria.examDateTo) {
      this.criteria.examDateTo = this.dateToString(this.criteria.examDateTo);
    }

    this.questionService.findByCriteria(this.criteria).subscribe(data => {
      this.questions = data;
      this.criteriaModalVisible = false;
      this.criteria = new QuestionSearchCriteria();
    })
  }

  onCancelSearchByCriteria() {
    this.criteriaModalVisible = false;
    this.criteria = new QuestionSearchCriteria();
  }

  private dateToString(d: Date): string {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
}
