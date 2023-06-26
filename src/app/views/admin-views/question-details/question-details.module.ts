import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionDetailsComponent} from "./question-details.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";


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
    ButtonModule,
    RippleModule,
    TableModule,
  ]
})
export class QuestionDetailsModule {
}
