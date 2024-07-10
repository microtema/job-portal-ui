import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {JobService} from "../job.service";
import {JobData} from "../model/job";
import {DatePipe, JsonPipe} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    JsonPipe,
    MatGridList,
    MatGridTile,
    MatFormField,
    MatInput,
    MatDivider,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    DatePipe
  ],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit, OnDestroy{

  data?:JobData
  sub?:Subscription
  constructor(public jobService: JobService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.jobService.get(id).subscribe((data:JobData) => this.data = data)
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
