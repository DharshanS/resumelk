

export class Certificate {

  certificateName: string;
  authority: string;
  certicateCode: string;
  dateOfCerticate: TimePeriod
  description: string;


  constructor() {
    this.dateOfCerticate = new TimePeriod();
    this.description = "";
  }


}

export class TimePeriod {
  month: string;
  year: string;
  constructor() { }
}
