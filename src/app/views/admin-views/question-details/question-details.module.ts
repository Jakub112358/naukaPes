import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionDetailsComponent} from "./question-details.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {SelectButtonModule} from "primeng/selectbutton";


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
    DialogModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    SelectButtonModule,
  ]
})
export class QuestionDetailsModule {
}
