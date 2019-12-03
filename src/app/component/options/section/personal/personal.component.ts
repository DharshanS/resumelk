import { Component, OnInit, Input,HostListener } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeInformation } from "../../../../resumeInfomation.service";

import { Router } from "@angular/router";
import { Personal } from './Personal';


@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],

})
export class PersonalComponent implements OnInit{
  public Editor = ClassicEditor;
  @Input() flag: boolean;
  @Input() personalInformation:Personal;

  constructor(
    private resumeService: ResumeInformation,
    private router: Router
  ) {}


  ngOnInit() {
    console.log("OnInit ...")
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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    alert('Key was pressed');
  }
}
