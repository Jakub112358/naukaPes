import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLayoutComponent} from "./user-layout.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent
      }
    ]),
  ]
})
export class UserLayoutModule { }
