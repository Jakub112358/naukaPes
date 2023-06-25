import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {QuestionListComponent} from "../question-list/question-list.component";
import {MetricComponent} from "./metric.component";

@NgModule({
  declarations: [
    MetricComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionListComponent
      }
    ]),
  ]
})
export class MetricModule { }
