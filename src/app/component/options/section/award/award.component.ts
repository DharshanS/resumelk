import { Component, OnInit,Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeService } from "../../../../resume.service";
import { Award } from './Award';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit,AfterContentChecked {

  public Editor = ClassicEditor;
  awards=[];
  selected=0;
  @Input() flag:boolean;
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor( public resumeService: ResumeService,
    ) { }

  ngOnInit() {
    console.log("AwardComponent initiated");

  }

  addAward(){
    this.resumeService._resume.awards.push(new Award())
   // alert(JSON.stringify(this.awards));
  }
  removeAward(index){
    if(index!=0)
    this.resumeService._resume.awards.splice(index,1)
  }

  selectedItem(index){
    this.selected=index;
  }



  calculateDate(year,date){

  }

  ngAfterContentChecked(){
    console.log("AwardComponent content cheack");
    if(this.flag && this.resumeService._resume.awards.length==0){
      this.resumeService._resume.awards.push(new Award())
    }
  }

}
