import { Component, OnInit ,Renderer2,ViewEncapsulation,ElementRef,ViewChild} from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeInformation } from "../../../../resumeInfomation.service";



@Component({

  selector: 'app-temp-two',
  templateUrl: './temp-two.component.html',
  styleUrls: ['./temp-two.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TempTwoComponent implements OnInit {

  @ViewChild('tasknote',{static: false}) input: ElementRef;



  public Editor = ClassicEditor;

  __resume:any;




constructor( private resumeService: ResumeInformation,){

}

  ngOnInit() {
    this.__resume=this.resumeService._resume;
    console.log("---Inside ngOnInit---");
  }
  ngDoCheck() {
    console.log("---Inside ngDoCheck---");
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {

    console.log('height---' + this.input.nativeElement.offsetHeight);  //<<<===here
    console.log('width---' + this.input.nativeElement.offsetWidth);
    // console.log("---Inside ngAfterViewInit---"+JSON.stringify(resumeJson));


    var arraylist=this.input.nativeElement.querySelectorAll('.section');
    //this.input.nativeElement.insertAdjacentHTML('beforeend', '<div class="page-break col-1" ></div>');

    var section=0;
    var bottom=0;
    for(var i=0;i<arraylist.length;i++){
      section=section+arraylist[i].offsetHeight;

      if(section>842){
        this.input.nativeElement.querySelectorAll('.section')[i].insertAdjacentHTML('beforebegin', '<div class="page-break col-1" ></div>');
        section=0;
      }
    }



    //console.log('width---' + arraylist[9].insertAdjacentHTML);


  }
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");
  }

}
