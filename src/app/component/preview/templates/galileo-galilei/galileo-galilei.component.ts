import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { EditorService } from "../../../options/editor.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
@Component({
  selector: 'app-galileo-galilei',
  templateUrl: './galileo-galilei.component.html',
  styleUrls: ['./galileo-galilei.component.scss']
})
export class GalileoGalileiComponent implements OnInit {



  @ViewChild('californi', { static: true }) input: ElementRef;
  @ViewChild('pages', { static: true }) pages: ElementRef;
  page2Flag = false;

  public Editor = ClassicEditor;
  resumeComponents: any;


  constructor(private resumeService: ResumeService, private sections: EditorService) { }

  ngOnInit() {

    this.loadResume();
  }


  ngAfterViewInit() {
    let arraylist = this.input.nativeElement.querySelectorAll('.section');
    let section = 0;
    for (let i = 0; i < arraylist.length; i++) {
      section = section + arraylist[i].offsetHeight;


      if (this.resumeService.A4_SIZE < section) {

        let element = this.input.nativeElement.querySelectorAll('.section')[i];
        // this.input.nativeElement.querySelectorAll('.section')[i].insertAdjacentHTML('beforebegin', '<div class="page-break col-1" ></div>');
        this.page2Flag = true;
        setTimeout(() => {
          if (typeof (element) !== 'undefined')
            this.pages.nativeElement.querySelector('.page2').appendChild(element);
        }, 1000);

      }




    }



  }

  loadResume() {
    this.resumeComponents = this.resumeService.resumeObject['resumeJson'];
  }

}
