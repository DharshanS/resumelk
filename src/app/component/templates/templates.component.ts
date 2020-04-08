import { Component, OnInit, AfterViewInit, TemplateRef, AfterContentChecked } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResumeService } from "./../../resume.service";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  loaderDiv:any = false;
  selectedTemplate = 1;
  imgUrl;

  constructor(private router: Router, public resumeService: ResumeService, private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }

  navigateToEditor() {

  }

  selectTemplateName(name: string) {
    this.imgUrl = "assets/images/templates/" + name + ".png"
    this.resumeService.updateTemplate(name)

  }
  goToProductDetails() {
    this.router.navigate(['/editor', this.resumeService.resumeObject['resumeName']]);

this.loaderDiv = true;
      //  setTimeout (() => {
      //    this.loaderDiv = false;
      //    console.log("Hello from setTimeout");
      // }, 1000);


  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${'assets/images/templates/' + image + '.png'})`);
  }
}
