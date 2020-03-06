import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit } from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeService } from "../../../../resume.service";
import { EditorService } from "../../../options/editor.service";
import { timeout, timeInterval } from 'rxjs/operators';
//import { ConsoleReporter } from 'jasmine';



@Component({

  selector: 'app-temp-two',
  templateUrl: './einstein.component.html',
  styleUrls: ['./einstein.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class EinsteinComponent implements OnInit {

  @ViewChild('tasknote', { static: true }) input: ElementRef;
  @ViewChild('page2', { static: true }) pages: ElementRef;
  page2Flag = false;
  templateData: any;

  constructor(public resumeService: ResumeService, private renderer2: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {
    console.log("On init")
    this.resumeService.loadResumeComponentsJson();

  }

  templatePageBreak() {
    let arraylist = this.input.nativeElement.querySelectorAll('.section');
    console.log(arraylist.length)
    let section = 0;
    for (let i = 0; i < arraylist.length; i++) {
      section = section + arraylist[i].offsetHeight;
      if (this.resumeService.A4_SIZE < section) {
        let element = this.input.nativeElement.querySelectorAll('.section')[i];
        this.page2Flag = true;
        setTimeout(() => {
          if (typeof (element) !== 'undefined')
            this.pages.nativeElement.querySelector('.page2').appendChild(element);
        }, 1000);

      }
    }
  }

}
