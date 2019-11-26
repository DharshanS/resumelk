export class Publication{
  title:string;
  publisher:string;
  url:string;
  publicationDate:TimePeriod;
  description:string;
  constructor(){
    this.publicationDate=new TimePeriod();
  }

}

export class TimePeriod{
  month:string;
  year:string;

}
