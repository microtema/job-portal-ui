import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  company: string;
  salary?: string;
  cv?: string;
  coverPaper?: String
  certificates?: any[];
  startDate?: Date;
  endDate?: Date;
  contact?: string;
  status?: JobStatus;
}

export enum JobStatus {
  PENDING, STARTED, WAITING,COMPLETED,CANCELLED,TERMINATED
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './Jobs.component.html',
  styleUrl: './Jobs.component.css',
  standalone: true,
  imports: [
    MatTableModule,
  ]
})
export class JobsComponent {
  displayedColumns: string[] = ['position', 'name', 'company', 'salary', 'cv', 'coverPaper', 'certificates', 'startDate', 'endDate', 'contact', 'status'];
  dataSource: PeriodicElement[] = [
    {position: 1, name: 'Solution Architect', company: 'Mercedes-Benz AG', salary: '120K', cv:'Lorem...', status: JobStatus.PENDING},
    {position: 2, name: 'Cloud Solution Architect', company: '1&1 Versatel GmbH', salary: '130K', coverPaper:'Lorem ...', status: JobStatus.STARTED},
    {position: 3, name: 'Technical Product Owner', company: 'Attruvia AG', salary: '96K', status: JobStatus.COMPLETED},
    {position: 4, name: 'Technical Project Manager', company: 'dmTech', salary: '140K', status: JobStatus.CANCELLED},
    {position: 5, name: 'AI Prompt Engineer', company: 'BMV AG', salary: '', status: JobStatus.PENDING},
    {position: 6, name: 'Machine Deep Learning', company: 'ENBW', salary: '100K', status: JobStatus.TERMINATED},
    {position: 7, name: 'Process Manager', company: 'ISB AG', salary: '', status: JobStatus.WAITING},
    {position: 8, name: 'IT Manager Infrastructure', company: 'Vektor AG', salary: '95K', status: JobStatus.WAITING},
    {position: 8, name: 'Enterprise Solution Architect', company: 'R + V', salary: '100K', status: JobStatus.WAITING},
    {position: 9, name: 'AI Solution Architect', company: 'Sopra Steria', salary: '', status: JobStatus.WAITING},
    {position: 10, name: 'Presale Solution Architect', company: 'Porsche AG', salary: '120K', status: JobStatus.WAITING},
  ];
}
