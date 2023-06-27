import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionListComponent} from "./question-list.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionListComponent
      }
    ]),
    TableModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
  ]
})
export class QuestionListModule { }
