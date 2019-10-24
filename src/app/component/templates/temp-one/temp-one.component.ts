import { Component, OnInit ,Renderer2,ViewEncapsulation,ElementRef,ViewChild} from '@angular/core';
import resumeJson from '../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'





@Component({

  selector: 'app-temp-one',
  templateUrl: './temp-one.component.html',
  styleUrls: ['./temp-one.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TempOneComponent implements OnInit {

  @ViewChild('tasknote',{static: false}) input: ElementRef;



  public Editor = ClassicEditor;

  __resume:any;


  config: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
};


  ngOnInit() {
    this.__resume=resumeJson;
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
