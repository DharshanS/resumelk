

export class Certificate {

  certificateName:string;
  authority:string;
  certicateCode:string;
  dateOfCerticate:TimePeriod

  constructor(){
    this.dateOfCerticate=new TimePeriod();
  }


}

export class TimePeriod{
  month:string;
  year:string;
}
