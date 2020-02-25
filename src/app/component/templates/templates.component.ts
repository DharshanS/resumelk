import { Component, OnInit,AfterViewInit ,TemplateRef, AfterContentChecked} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResumeBucket } from "./../../resume.service";
import { EditorService } from '../options/editor.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {


  selectedTemplate=1;
  imgUrl;

  constructor(private router: Router,public resume:ResumeBucket,private _sanitizer: DomSanitizer) { }


 ngOnInit(){
   this.resume.loadResume(8);
 }

  navigateToEditor(){

  }

  selectTemplateName(name){
   this.imgUrl ="assets/images/templates/"+name+".png"
   console.log(name)
   this.resume.updateTemplate(name)

  }
  goToProductDetails() {
    this.router.navigate(['/editor',this.resume._currentTemplate]);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${'assets/images/templates/'+image+'.png'})`);
}
}
