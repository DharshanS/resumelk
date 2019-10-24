import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() flag:boolean;
  public Editor = ClassicEditor;

  education={
    "institutionName":"Institution #",
    "feildOfStudy":"",
    "country":"",
    "city":"",
    "timePeriod":{
      "from":{
        "month":"",
        "year":""
      },
      "to":{
        "month":"",
        "year":""
      }
    },
    "currently":false
  }

  selected=0;

  eductions_place=[];


  constructor() { }

  ngOnInit() {
    this.eductions_place.push(this.education)
  }

  removeEducation(index){
    if(index!==0)
this.eductions_place.splice(index,1);


  }

  addEducation(){
    this.eductions_place.push({
      "institutionName":"Institution #",
      "feildOfStudy":"",
      "country":"",
      "city":"",
      "timePeriod":{
        "from":{
          "month":"",
          "year":""
        },
        "to":{
          "month":"",
          "year":""
        }
      },
      "currently":false
    });
  }
  selectedItem(index){
    this.selected=index;
  }


  continue(){
    console.log(this.eductions_place)
  }

}
