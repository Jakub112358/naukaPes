import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddQuestionComponent} from "./add-question.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {SelectButtonModule} from "primeng/selectbutton";



@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddQuestionComponent
      }
    ]),
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    DialogModule,
    SelectButtonModule,

  ]
})
export class AddQuestionModule { }
