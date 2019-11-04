import { Component, OnInit, Input } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeInformation } from "../../../../resumeInfomation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"]
})
export class PersonalComponent implements OnInit {
  public Editor = ClassicEditor;

  @Input() flag: boolean;

  personalInformation={
    title:"Mr",
    firstName:"Sithmparam",
    "lastName":"Dharshan",
    "dateOfBirth":"1986-04-02",
    "nationality":"SriLankan",
    "phoneNumber":"0770885997",
    "email":"cdharshans@gmail.com",
    "web":"https://stg.miracleofasia.com",
    "git":"github.com/dharshan@sitha",
    "address":{
        "street":"No 159/1 Dambawela Road",
        "city":"Kandy",
        "postalCode":"20000",
        "country":"Sri Lanka"

    },
    "description":"A System Software Engineer having 3 years of extensive experience in developing web-based components, User Interfaces and state-of-the- art software"


};

  constructor(
    private resumeService: ResumeInformation,
    private router: Router
  ) {}

  ngOnInit() {
    this.resumeService._resume.personalInformation = this.personalInformation;
  }

  CustomFeildOne = "Custom field";
  CustomFeildTwo = "Custom field";

  continue() {
    // console.log(this.personal_Info)
  }

  goToPreview() {

    this.router.navigate(["/preview"]);
  }
}
