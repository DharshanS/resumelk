import { Component, OnInit,Input,AfterContentChecked } from '@angular/core';
import { Acheivment } from './Achivment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit,AfterContentChecked {


  __achivements=[];
    selected=0;
    public Editor = ClassicEditor;



  @Input() flag:boolean;


  constructor( private resumeService: ResumeBucket) { }

  ngOnInit() {

  }

  addAchivements(){
    this.resumeService._resume.achivements.push(new Acheivment())
  }
  removeAchivements(index){
    if(index!=0)
    this.resumeService._resume.achivements.splice(index,1);

  }

  selectedItem(i){
    this.selected=i;
  }

  ngAfterContentChecked(){
    if(this.flag && this.resumeService._resume.achivements.length==0){
      this.resumeService._resume.achivements.push(new Acheivment())
    }
  }


}
