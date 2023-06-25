import { Component} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[]=[];

  ngOnInit(){
    this.items = [
      { label: 'lista pytań', icon: 'pi pi-list', routerLink: 'questionList'},
      { label: 'dodaj pytanie', icon: 'pi pi-plus', routerLink: 'addQuestion'},
      { label: 'nauka', icon: 'pi pi-file-edit', routerLink: 'quiz'},
    ];
  }

}
