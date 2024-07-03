import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-job-status',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './job-status.component.html',
  styleUrl: './job-status.component.css'
})
export class JobStatusComponent {

  @Input() data?: string

  mapping: any = {
    "PENDING": "pending",
    "STARTED": "send",
    "WAITING": "hourglass_top",
    "COMPLETED": "check_small",
    "CANCELLED": "cancel_schedule_send",
    "TERMINATED": "radio_button_checked"
  }

  descriptionMapping: any = {
    "PENDING": "pending",
    "STARTED": "send",
    "WAITING": "hourglass_top",
    "COMPLETED": "check_small",
    "CANCELLED": "cancel_schedule_send",
    "TERMINATED": "radio_button_checked"
  }

  getJobStatus() {

    return this.mapping[this.data || "PENDING"]
  }
}
