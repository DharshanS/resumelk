import { Component, OnInit, Input,HostListener, DoCheck } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeBucket } from "../../../../resume.service";
import { Router } from "@angular/router";
import { Personal } from './Personal';


@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],

})
export class PersonalComponent implements OnInit,DoCheck{
  public Editor = ClassicEditor;
  @Input() flag: boolean;
  @Input() personal:Personal;



  constructor(
    private resumeService: ResumeBucket,
    private router: Router
  ) {}


  ngOnInit() {
    console.log("OnInit ...")
    this.fillInitialValue();

  }

  CustomFeildOne = "Custom field";
  CustomFeildTwo = "Custom field";

  continue() {
    // console.log(this.personal_Info)
  }

  goToPreview() {

    this.router.navigate(["/preview"]);
  }

 // @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
   console.log('key enter')
  }

  ngDoCheck(){
  //  console.log(this.Editor.getData())
  }

  isPersonalInfoNull(){
    if(this.resumeService._resume.personal==null){
      return true;
    }
    return false;
  }

  fillInitialValue(){
    //This should be change
    if(!this.isPersonalInfoNull){
      console.log("Personal info null...")
      this.personal=new Personal();
     this.resumeService._resume.personal = this.personal;
   }else{
    console.log("Personal info updates...")
   this.personal = this.resumeService._resume.personal;
   }
  }

}
