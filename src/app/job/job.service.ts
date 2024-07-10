import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JobData, JobDataPage} from './model/job';

import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  public query( pageNumber: Number,  pageSize: Number ): Observable<JobDataPage> {

    const url = `http://localhost:3000/jobs?_page=${pageNumber}&_per_page=${pageSize}`;

    return this.http.get<JobDataPage>(url)
      .pipe(map((data:any) => {
      return {
        data:data.data,
        page: pageNumber,
        perPage: pageSize,
        total: data.items,
        totalPages: data.pages
      }
    }));
  }

  public get(id:string): Observable<JobData> {

    const url = `http://localhost:3000/jobs/${id}`;

    return this.http.get<JobData>(url)
  }
}
