import { Component, OnInit, Input,DoCheck } from "@angular/core";
import { EditorService } from "../../editor.service";
import { Experiance } from "./experience";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit,DoCheck {
  @Input() flag: boolean;

  work_experiences = [];

  public Editor = ClassicEditor;
  selected = 0;

  constructor(public editor: EditorService, private resumeService: ResumeBucket,) {}

  ngOnInit() {

    this.work_experiences.push(new Experiance());
    this.resumeService._resume.workExperiance=this.work_experiences;
  }

  addexperience() {
    console.log(this.work_experiences);
    this.work_experiences.push(new Experiance());
  }

  removeExperience(index) {
    if (index !== 0) this.work_experiences.splice(index, 1);
  }

  selectedItem(index) {
    this.selected = index;
  }

  ngDoCheck(){
 // console.log(this.Editor.getData())
}

  continue() {
    console.log(this.work_experiences);
  }

}
