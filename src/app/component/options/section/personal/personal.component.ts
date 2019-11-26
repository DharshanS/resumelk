import { Component, OnInit, Input } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeInformation } from "../../../../resumeInfomation.service";

import { Router } from "@angular/router";
import { Personal } from './Personal';


@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],

})
export class PersonalComponent implements OnInit {
  public Editor = ClassicEditor;


  @Input() flag: boolean;

  personalInformation:Personal;

  constructor(
    private resumeService: ResumeInformation,
    private router: Router
  ) {}

  ngOnInit() {
    this.personalInformation=new Personal();
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
