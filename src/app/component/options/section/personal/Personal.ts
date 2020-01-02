export class Personal{
  title:string;
  firstName:string;
  lastName:string;
  dateOfBirth:string;
  nationality:string;
  phoneNumber:string;
  mobileNumber:string;
  email:string;
  web:string;
  git:string;
  address:Address;
  description:string;

  constructor(){
    this.address=new Address();
  }

}

export class Address{
    street:string;
    city:string;
    postalCode:string;
    country:string
}
