import { Component, OnInit,Input } from '@angular/core';
import { ResumeInformation } from "../../../../resumeInfomation.service";
import { Publication } from './Publication';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() flag:boolean;


  public Editor = ClassicEditor;
  selected = 0;


  constructor( private resumeService: ResumeInformation) { }

  publications=[];

  ngOnInit() {
    this.publications.push(new Publication());
    this.resumeService._resume.publictions=this.publications;
  }

  addPublication(){
    this.publications.push(new Publication())
  }
  removePublication(index){
    if(index!=0)
    this.publications.splice(index,1);

  }

  selectedItem(index) {
    this.selected = index;
  }

}
