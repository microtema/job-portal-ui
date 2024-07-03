import {Component, Input} from '@angular/core';
import {JobInterviewStatus} from "../../job/model/job";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-interview-status',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './interview-status.component.html',
  styleUrl: './interview-status.component.css'
})
export class InterviewStatusComponent {

  @Input() data?: JobInterviewStatus[];
}
