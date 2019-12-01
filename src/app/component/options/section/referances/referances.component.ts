import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Referance } from './Referance';
import { ResumeInformation } from "../../../../resumeInfomation.service";
@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.css']
})
export class ReferancesComponent implements OnInit {

  constructor(private resumeService: ResumeInformation) { }

  public Editor = ClassicEditor;
  @Input() flag:boolean;
  selected=0;

  __referances:any;


  ngOnInit() {
    this.__referances=[new Referance()];
   this.resumeService._resume.referances=this.__referances;
  }


  addNewReferance(){

    this.__referances.push(new Referance())
  }

  selectedItem(i){
   // alert(i);
    this.selected=i;

  }
}
