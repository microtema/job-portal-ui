import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {JobService} from "../../job.service";
import {JobData} from "../../model/job";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit, OnDestroy{

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
