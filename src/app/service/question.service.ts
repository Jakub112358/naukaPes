import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Question} from "../model/question";
import {ApiConstraints} from "../config/api-constraints";
import {QuestionSearchCriteria} from "../model/question-search-criteria";

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



  findByCriteria(criteria: QuestionSearchCriteria) {
    return this.http.post<Question[]>(ApiConstraints.CRITERIA_URL, criteria)
      .pipe(
        catchError(this.handleError<Question[]>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
