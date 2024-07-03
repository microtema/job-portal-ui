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
  contact?: ContactData;
  status?: JobStatus;
  interviews?: JobInterviewStatus[]
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

export interface ContactData {
  name: string;
  mail: string;
  mobile?: string
}

export interface JobInterviewStatus {
  description:string;
  dueDate?:Date;
  duration?:number;
  channel?: string;
  completed:boolean
}
