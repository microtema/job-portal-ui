import {Component} from '@angular/core';
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  standalone: true,
  imports: [
    MatTableModule,
  ]
})
export class SkillsComponent {

}
