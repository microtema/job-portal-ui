export interface JobData {
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

export interface JobDataPage {
  data: JobData[];
  page: Number;
  perPage: Number;
  total: Number;
  totalPages: Number;
}
