import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {JobService} from "./job.service";
import {JobData, JobDataPage} from "./model/job";

import { merge, Observable, of as observableOf, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Jobs.component.html',
  styleUrl: './Jobs.component.css',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginator
  ]
})
export class JobsComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'company', 'salary', 'cv', 'coverPaper', 'certificates', 'startDate', 'endDate', 'contact', 'status'];
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
