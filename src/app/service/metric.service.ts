import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {ApiConstraints} from "../config/api-constraints";

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<any[]> {
    return this.http.get<any[]>(ApiConstraints.METRIC_URL)
      .pipe(
        catchError(this.handleError<any[]>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}
