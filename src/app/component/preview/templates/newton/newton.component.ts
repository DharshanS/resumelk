import { Component, OnInit ,Renderer2,ViewEncapsulation,ElementRef,ViewChild} from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeBucket } from "../../../../resume.service";



@Component({

  selector: 'app-temp-two',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewtonComponent implements OnInit {

  @ViewChild('tasknote',{static: false}) input: ElementRef;



  public Editor = ClassicEditor;

  __resume:any;




constructor( private resumeService: ResumeBucket,private renderer2: Renderer2, private el: ElementRef){

}

  ngOnInit() {

    this.__resume=this.resumeService._resume;
    console.log("---Inside ngOnInit---");
  }

  onChangeColorHex8(color: string,color2:string) {
    console.log('color',color)
     this.renderer2.setStyle(this.el.nativeElement.querySelector('.name'), 'color', color);
    let bgColor = this.el.nativeElement.querySelectorAll('.bg-color');
    let names = this.el.nativeElement.querySelectorAll('.name');
    let title_boxs = this.el.nativeElement.querySelectorAll('.title-box');
    let title_icons = this.el.nativeElement.querySelectorAll('.title-icon');
    let key_skills_boxs= this.el.nativeElement.querySelectorAll('.key-skills-box');

    console.log('myClass',bgColor)
    bgColor.forEach(e => {
      console.log('myClass23',e)
      this.renderer2.setStyle(e,'background', color);
    })
    title_icons.forEach(e => {
      console.log('myClass23',e)
      this.renderer2.setStyle(e,'background', color);
    })
    key_skills_boxs.forEach(e => {
      console.log('myClass23',e)
      this.renderer2.setStyle(e,'background', color);
    })

    title_boxs.forEach(e => {
      console.log('myClass23',e)
      this.renderer2.setStyle(e,'color', color);
    })
    names.forEach(e => {
      this.renderer2.setStyle(e,'color', color2);
    })

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

    //console.log('height---' + this.input.nativeElement.offsetHeight);  //<<<===here
    //console.log('width---' + this.input.nativeElement.offsetWidth);
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
