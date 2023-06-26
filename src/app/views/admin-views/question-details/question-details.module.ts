import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionDetailsComponent} from "./question-details.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionDetailsComponent
      }
    ]),
  ]
})
export class QuestionDetailsModule {
}
