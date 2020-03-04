import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeService } from "../../../../resume.service";



@Component({

  selector: 'app-temp-two',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewtonComponent implements OnInit {

  @ViewChild('tasknote', { static: false }) input: ElementRef;
  public Editor = ClassicEditor;
  __resume: any;
  @ViewChild('hawking', { static: false }) myClass: ElementRef;


  constructor(private resumeService: ResumeService, private renderer2: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {
    this.loadResume();
  }

  ngAfterViewInit() {

    var arraylist = this.input.nativeElement.querySelectorAll('.section');
    //this.input.nativeElement.insertAdjacentHTML('beforeend', '<div class="page-break col-1" ></div>');

    var section = 0;
    var bottom = 0;
    for (var i = 0; i < arraylist.length; i++) {
      section = section + arraylist[i].offsetHeight;

      if (section > 842) {
        this.input.nativeElement.querySelectorAll('.section')[i].insertAdjacentHTML('beforebegin', '<div class="page-break col-1" ></div>');
        section = 0;
      }
    }
  }

  onChangeColorHex8(color: string, color2: string) {
    console.log('color', color)

    let names = this.myClass.nativeElement.querySelectorAll('.color-1');

    console.log('myClass', names)
    names.forEach(e => {
      console.log('myClass23', e)
      this.renderer2.setStyle(e, 'background', color);
    })

  }

  loadResume() {
    this.__resume = this.resumeService.resumeObject['resumeJson'];
  }


}
