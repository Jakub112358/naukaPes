import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddQuestionComponent} from "./add-question.component";
import {RouterModule} from "@angular/router";



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

  ]
})
export class AddQuestionModule { }
