import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
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
        component: MetricComponent
      }
    ]),
  ]
})
export class MetricModule { }
