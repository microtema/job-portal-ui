import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-date-duration',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './date-duration.component.html',
  styleUrl: './date-duration.component.css'
})
export class DateDurationComponent {

  @Input() startDate?:Date

  @Input() endDate?:Date

  duration?:string
}
