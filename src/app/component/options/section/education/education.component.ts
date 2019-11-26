import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Education } from './Education';
import { ResumeInformation } from "../../../../resumeInfomation.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() flag:boolean;
  public Editor = ClassicEditor;

  education:Education;

  selected=0;

  eductionsPlace=[];


  constructor(
    private resumeService: ResumeInformation

  ) {

  }

  ngOnInit() {
    this.eductionsPlace.push(new Education())

    this.resumeService._resume.education=this.eductionsPlace;
  }

  removeEducation(index){
    if(index!==0)
this.eductionsPlace.splice(index,1);


  }

  addEducation(){
    console.log(this.Editor.document.ge);
    this.eductionsPlace.push(new Education())
  }
  selectedItem(index){
    this.selected=index;
  }


  continue(){
    console.log(this.eductionsPlace)
  }

}
