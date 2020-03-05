import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Education } from './Education';
import { ResumeService } from "../../../../resume.service";
import { EditorService } from "../../editor.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.flag && this.resumeService.checklenthOfarray(this.resumeService.resumeComponents.education)) {
      this.resumeService.resumeComponents.education.push(new Education());
    }

  }
  @Input() flag: boolean;
  public Editor = ClassicEditor;
  education: Education;
  selected = 0;
  eductionsPlace = [];

  constructor(public resumeService: ResumeService, public editor: EditorService) {
  }

  ngOnInit() {
    if (this.resumeService.resumeComponents.education.length == 0)
      this.resumeService.resumeComponents.education.push(new Education())
  }

  removeEducation(index) {
    if (index !== 0)
      this.eductionsPlace.splice(index, 1);
  }

  addEducation() {
    console.log(this.Editor.document.ge);
    this.eductionsPlace.push(new Education())
  }
  selectedItem(index) {
    this.selected = index;
  }

  continue() {
    console.log(this.eductionsPlace)
  }




}
