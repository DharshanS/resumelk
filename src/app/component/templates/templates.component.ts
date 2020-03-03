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


  selectedTemplate = 1;
  imgUrl;

  constructor(private router: Router, public resume: ResumeService, private _sanitizer: DomSanitizer) { }


  ngOnInit() {

  }

  navigateToEditor() {

  }

  selectTemplateName(name) {
    alert(name)
    this.imgUrl = "assets/images/templates/" + name + ".png"
    this.resume.updateTemplate(name)

  }
  goToProductDetails() {
    this.router.navigate(['/editor', this.resume.resumeObject['resumeName']]);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${'assets/images/templates/' + image + '.png'})`);
  }
}
