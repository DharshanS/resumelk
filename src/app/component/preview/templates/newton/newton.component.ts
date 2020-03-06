import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from '../../../../utility.service';




@Component({

  selector: 'newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
})
export class NewtonComponent implements OnInit, AfterViewInit {

  @ViewChild("newton", { static: false }) newtonPage: ElementRef;

  templateData: any;
  page2Class = "secondPage";
  newtonPage2 = false;

  constructor(
    private urilityService: UtilityService, 
    public resumeService: ResumeService, 
    private renderer2: Renderer2, 
    private el: ElementRef) {

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }

  ngAfterViewInit() {


    setTimeout(() => {
      if (this.urilityService.isObjectIsNotNull(this.resumeService.resumeComponents)) {
        this.newtonPage2 = this.urilityService.templatePageBreak(this.newtonPage, this.page2Class);
      }
    }, 1000)
  }


}
