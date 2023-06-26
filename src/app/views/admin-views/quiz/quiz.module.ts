import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from "./quiz.component";
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


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
    CardModule,
    ButtonModule,
    RippleModule,
  ]
})
export class QuizModule { }
