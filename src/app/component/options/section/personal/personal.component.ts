import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public Editor = ClassicEditor;

  @Input() flag:boolean;







  constructor() { }

  ngOnInit() {
  }

  CustomFeildOne="Custom field";
  CustomFeildTwo="Custom field";

  personal_Info={
    "titleBefore":"",
    "firstName":"",
    "lastName":"",
    "titileAfter":"",
    "dateOfBirth":"",
    "natinality":"",
    "phoneNumber":"",
    "email":"",
    "web":"",
    "address":{
      "street":"",
      "city":"",
      "postalCode":"",
      "country":"",
      "profile":""
    }

    }

    continue(){
      console.log(this.personal_Info)
    }


}
