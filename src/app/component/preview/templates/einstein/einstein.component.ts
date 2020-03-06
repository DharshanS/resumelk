import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
@Component({
  selector: 'app-temp-two',
  templateUrl: './einstein.component.html',
  styleUrls: ['./einstein.component.scss'],
})
export class EinsteinComponent implements OnInit, AfterViewInit {

  @ViewChild("einstein", { static: false }) einsteinPage: ElementRef;
  einsteinPage2 = false;
  templateData: any;
  page2Class = "secondPageEes";

  constructor(
    public resumeService: ResumeService,
    private renderer2: Renderer2, private el: ElementRef, private urilityService: UtilityService) {

  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      if (this.urilityService.isObjectIsNotNull(this.resumeService.resumeComponents)) {
        this.einsteinPage2 = this.urilityService.templatePageBreak(this.einsteinPage, this.page2Class);
      }
    }, 1000)

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }


}
