import { Component, OnInit,Input } from '@angular/core';
import { Acheivment } from './Achivment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {


  __achivements=[];
    selected=0;
    public Editor = ClassicEditor;



  @Input() flag:boolean;


  constructor( private resumeService: ResumeBucket) { }

  ngOnInit() {
    this.__achivements.push(new Acheivment())
    this.resumeService._resume.achivements=this.__achivements;
  }

  addAchivements(){
    this.__achivements.push(new Acheivment())
  }
  removeAchivements(index){
    if(index!=0)
    this.__achivements.splice(index,1);

  }

  selectedItem(i){
    this.selected=i;
  }


}
