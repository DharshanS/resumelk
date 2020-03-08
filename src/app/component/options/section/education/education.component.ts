import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Education } from './Education';
import { ResumeService } from "../../../../resume.service";
import { EditorService } from "../../editor.service";
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.education))
      this.addNewEducation();

  }
  @Input() flag: boolean;
  public Editor = ClassicEditor;
  education: Education;
  selectedEducation = 0;


  constructor(public resumeService: ResumeService, public editorService: EditorService, private utilityService: UtilityService) {
  }

  ngOnInit() {
  }

  removeEducation(index: number) {
    if (index !== 0)
      this.resumeService.resumeComponents.education.splice(index, 1);
    this.selectedEducation = 0;
  }

  removeEducationComponant() {
    this.editorService.removeComponent('education');
  }

  addNewEducation() {
    this.resumeService.resumeComponents.education.push(new Education())
  }
  selectedEducationItem(index: number) {
    this.selectedEducation = index;
  }






}
