import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResumeBucket } from "../../../../resume.service";
import { EditorService } from "../../../options/editor.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
@Component({
  selector: 'app-californi-small',
  templateUrl: './californi-small.component.html',
  styleUrls: ['./californi-small.component.scss']
})
export class CaliforniSmallComponent implements OnInit {



  @ViewChild('californi',{static:true}) input: ElementRef;
  @ViewChild ('pages',{static:true}) pages: ElementRef;
  page2Flag=false;

  public Editor = ClassicEditor;
  __resume: any;

  
  constructor(private resumeService: ResumeBucket,private sections:EditorService) { }

  ngOnInit() {

    this.getResume();
  }


  ngAfterViewInit() {

    console.log('height---' + this.input.nativeElement.offsetHeight);  //<<<===here
    console.log('width---' + this.input.nativeElement.offsetWidth);
    // console.log("childrens"+this.sectionRef);


    let arraylist=this.input.nativeElement.querySelectorAll('.section');
    //this.input.nativeElement.insertAdjacentHTML('beforeend', '<div class="page-break col-1" ></div>');

    console.log(arraylist.length)
    let section=0;
    for(let i=0;i<arraylist.length;i++){
      section=section+arraylist[i].offsetHeight;


      if(this.resumeService.A4_SIZE<section){

        let element=this.input.nativeElement.querySelectorAll('.section')[i];
       // this.input.nativeElement.querySelectorAll('.section')[i].insertAdjacentHTML('beforebegin', '<div class="page-break col-1" ></div>');
        this.page2Flag=true;
        setTimeout(() => {
          if(typeof(element)!== 'undefined')
       this.pages.nativeElement.querySelector('.page2').appendChild(element);
        }, 1000);
        console.log(typeof(element));

       // this.input.nativeElement.querySelectorAll('.section')[i].remove();
       // section=0;
      }




    }



  }

  getResume(){
    let userCode=8
    this.sections.getResume(userCode).subscribe((data:any[])=>{
      console.log("get response");

      this.__resume=data[0].resumeJson;
      this.__resume.currentTemplate=data[0].resumeName;

      console.log("preview response");
      console.log(this.__resume);
      //this.resume._resume=data['body']['resumeJson'];
    })
  }

}
