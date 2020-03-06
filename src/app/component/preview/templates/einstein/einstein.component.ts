import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
@Component({
  selector: 'app-temp-two',
  templateUrl: './einstein.component.html',
  styleUrls: ['./einstein.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class EinsteinComponent implements OnInit, AfterViewInit {

  @ViewChild("einstein", { static: false }) einsteinPage: ElementRef;
  einsteinPage2 = false;
  templateData: any;

  constructor(public resumeService: ResumeService,
    private renderer2: Renderer2, private el: ElementRef, private urilityService: UtilityService) {

  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      if (this.resumeService.resumeComponents != null) {
        this.einsteinPage2 = this.urilityService.templatePageBreak(this.einsteinPage, this.einsteinPage2);
      }
    }, 1000)

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }


}
