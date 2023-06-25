import { Injectable } from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Question} from "../model/question";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private questionsUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.questionsUrl = 'http://localhost:8080/questions'
  }

  public findAll():Observable<Question>{
    return this.http.get<Question>(this.questionsUrl)
      .pipe(
        catchError(this.handleError<Question>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
