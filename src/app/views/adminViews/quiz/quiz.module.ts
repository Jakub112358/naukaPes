import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from "./quiz.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuizComponent
      }
    ]),
  ]
})
export class QuizModule { }
