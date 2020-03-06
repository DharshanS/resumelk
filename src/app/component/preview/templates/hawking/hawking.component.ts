import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeService } from "../../../../resume.service";
import { DomSanitizer } from '@angular/platform-browser';
import { EditorService } from "../../../options/editor.service";


@Component({

  selector: 'app-hawking',
  templateUrl: './hawking.component.html',
  styleUrls: ['./hawking.component.scss'],
})
export class HawkingComponent implements OnInit {

  @ViewChild('tasknote', { static: false }) input: ElementRef;
  @ViewChild('hawking', { static: false }) myClass: ElementRef;



  public Editor = ClassicEditor;

  resumeComponents: any;




  constructor(private sanitizer: DomSanitizer, private resumeService: ResumeService, private renderer2: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {
    this.loadResume();
  }

  ngAfterViewInit() {


    var arraylist = this.input.nativeElement.querySelectorAll('.section');
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

  loadResume() {
    this.resumeComponents = this.resumeService.resumeObject['resumeJson'];
  }

}


