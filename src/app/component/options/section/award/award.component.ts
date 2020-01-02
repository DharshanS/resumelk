import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeBucket } from "../../../../resume.service";
import { Award } from './Award';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

  public Editor = ClassicEditor;
  awards=[];
  selected=0;
  @Input() flag:boolean;
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor( private resumeService: ResumeBucket,
    ) { }

  ngOnInit() {
    this.awards.push(new Award())
    this.resumeService._resume.awards=this.awards;
  }

  addAward(){
    this.awards.push(new Award())
   // alert(JSON.stringify(this.awards));
  }
  removeAward(index){
    if(index!=0)
    this.awards.splice(index,1)
  }

  selectedItem(index){
    this.selected=index;
  }



  calculateDate(year,date){


   // alert(Number(year)+Number(date))

  }

}
