import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-leonardo-da-vinci',
  templateUrl: './leonardo-da-vinci.component.html',
  styleUrls: ['./leonardo-da-vinci.component.scss']
})
export class LeonardoDaVinciComponent implements OnInit {


  @ViewChild("leonardo", { static: false }) einsteinPage: ElementRef;
  einsteinPage2 = true;
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
