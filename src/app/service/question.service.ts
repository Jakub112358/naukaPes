import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Question} from "../model/response/question";
import {ApiConstraints} from "../config/api-constraints";
import {QuestionSearchCriteria} from "../model/request/question-search-criteria";
import {QuestionUpdate} from "../model/request/question-update";
import {AnswerCreate} from "../model/request/answer-create";
import {Answer} from "../model/response/answer";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(ApiConstraints.QUESTION_URL)
      .pipe(
        catchError(this.handleError<Question[]>())
      )
  }

  findByCriteria(criteria: QuestionSearchCriteria): Observable<Question[]> {
    return this.http.post<Question[]>(ApiConstraints.CRITERIA_URL, criteria)
      .pipe(
        catchError(this.handleError<Question[]>())
      )
  }

  public findById(id: number): Observable<Question> {
    return this.http.get<Question>(ApiConstraints.QUESTION_URL + '/' + id)
      .pipe(
        catchError(this.handleError<Question>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

  update(id: number, updateRequest: QuestionUpdate) {
    return this.http.patch<Question>((ApiConstraints.QUESTION_URL + '/' + id), updateRequest)
      .pipe(
        catchError(this.handleError<Question>())
      )
  }

  delete(id: number) {
    return this.http.delete((ApiConstraints.QUESTION_URL + '/' + id))
      .pipe(
        catchError(this.handleError<Question>())
      )
  }

  deleteAnswer(questionId: number, answerId: number) {
    return this.http.delete((ApiConstraints.QUESTION_URL + '/' + questionId + '/answers/' + answerId))
      .pipe(
        catchError(this.handleError<Question>())
      )
  }

  replaceAnswer(questionId: number, answerId: number, updateRequest: AnswerCreate) {
    return this.http.put<Answer>((ApiConstraints.QUESTION_URL + '/' + questionId + '/answers/' + answerId), updateRequest)
      .pipe(
        catchError(this.handleError<Answer>())
      )
  }

  addAnswer(questionId: number, createRequest: AnswerCreate) {
    return this.http.post<Answer>((ApiConstraints.QUESTION_URL + '/' + questionId + '/answers'), createRequest)
      .pipe(
        catchError(this.handleError<Answer>())
      )
  }
}
