import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from "./admin-layout.component";
import { HeaderComponent } from './header/header.component';
import {MenuModule} from "primeng/menu";
import {PanelMenuModule} from "primeng/panelmenu";
import {MenubarModule} from "primeng/menubar";




@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    PanelMenuModule,
    MenubarModule,
  ],
  exports: [AdminLayoutComponent]
})
export class AdminLayoutModule { }
