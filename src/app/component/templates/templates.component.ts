import { Component, OnInit,AfterViewInit ,TemplateRef} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResumeBucket } from "./../../resume.service";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit,AfterViewInit {


  selectedTemplate=1;
  imgUrl;

  constructor(private router: Router,private resume:ResumeBucket,private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    console.log("---Inside ngOnInit---");
  }
  ngDoCheck() {
    console.log("---Inside ngDoCheck---");
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {
    console.log("---Inside ngAfterViewInit---");
  }
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");
  }


  navigateToEditor(){

  }

  selectTemplateName(name){
   this.imgUrl ="assets/images/templates/"+name+".png"
   this.resume._currentTemplate=name;
  }
  goToProductDetails() {
 console.log('Test')
    this.router.navigate(['/editor',this.resume._currentTemplate]);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${'assets/images/templates/'+image+'.png'})`);
}
}
