import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatDivider} from "@angular/material/divider";

export interface LinkData {
  path: string;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatDivider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job Portal';

  links:LinkData[] = [
    {path:"/jobs", title: 'Jobs'},
    {path:"/profile", title: 'Profile'},
    {path:"/certificates", title: 'Certificates'},
    {path:"/skills", title: 'Skills'},
  ]
}
