import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MetricComponent} from "./metric.component";
import {TableModule} from "primeng/table";

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
        TableModule,
    ]
})
export class MetricModule { }
