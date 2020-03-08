

export class Education {
  institutionName: string;
  fieldOfStudy: string;
  country: string;
  city: string;
  timePeriod: TimePeriod;
  description: string;
  currently: boolean;
  constructor() {
    this.timePeriod = new TimePeriod();
    this.description = "";
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

  }
}
