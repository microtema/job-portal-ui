import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {JobService} from "./job.service";
import {JobData, JobDataPage} from "./model/job";

import { map, startWith, switchMap } from 'rxjs/operators';
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {ContactComponent} from "../component/contact/contact.component";
import {DateDurationComponent} from "../component/date-duration/date-duration.component";
import {JobStatusComponent} from "../component/job-status/job-status.component";
import {InterviewStatusComponent} from "../component/interview-status/interview-status.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './Jobs.component.html',
  styleUrl: './Jobs.component.css',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginator,
    MatIcon,
    MatBadge,
    ContactComponent, DateDurationComponent, JobStatusComponent, InterviewStatusComponent
  ]
})
export class JobsComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'company', 'salary', 'cv', 'coverPaper', 'certificates', 'contact', 'date', 'interviews', 'status'];
  totalData?: Number;
  pageSizes = [5, 10, 20, 50];
  dataSource = new MatTableDataSource<JobData>();

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(public jobService: JobService) {}

  ngOnInit(): void {
  }

  getTableData$(pageNumber: Number, pageSize: Number) {
    return this.jobService.query(pageNumber, pageSize);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => this.getTableData$( this.paginator.pageIndex + 1, this.paginator.pageSize)),
        map((jobDataPage:JobDataPage) => {
          this.totalData = jobDataPage.total;
          return jobDataPage;
        })
      )
      .subscribe((jobs) => {
        this.dataSource = new MatTableDataSource(jobs.data);
      });
  }
}
