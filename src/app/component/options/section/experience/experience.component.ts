import { Component, OnInit, Input,DoCheck } from "@angular/core";
import { EditorService } from "../../editor.service";
import { WorkExperiance } from "./experience";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit,DoCheck {
  @Input() flag: boolean;
  public Editor = ClassicEditor;
  selected = 0;

  constructor(public editor: EditorService, private resumeService: ResumeBucket,) {}

  ngOnInit() {

    if(this.resumeService._resume.workExperiance.length==0)
    this.resumeService._resume.workExperiance.push(new WorkExperiance())

  }

  addexperience() {

    console.log(this.resumeService._resume.workExperiance);
   // this.work_experiences.push(new WorkExperiance());
  }

  removeExperience(index) {
    if (index !== 0) this.resumeService._resume.workExperiance.splice(index, 1);
  }

  selectedItem(index) {
    this.selected = index;
  }

  ngDoCheck(){
 // console.log(this.Editor.getData())
}

  continue() {

  }

}
