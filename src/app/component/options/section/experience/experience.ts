export class WorkExperiance {

  companyName: string;
  jobTitle: string;
  country: string;
  city: string;
  timePeriod: TimePeriod;
  currentWork: boolean;
  description: string;

  constructor() {
    this.description = " ";
    this.timePeriod = new TimePeriod();
  }
}



export class TimePeriod {
  from: Date;
  to: Date;
  constructor() {
    this.from = new Date();
    this.to = new Date();
  }
}

export class Date {
  month: string;
  year: string;
  constructor() {
    this.month = "";
    this.year = "";
  }
}
