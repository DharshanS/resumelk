import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeService } from 'src/app/resume.service';
import { PageComponent } from './templates/page-component';
import { AddCpmponentService } from './template.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  ads: PageComponent[];
  @ViewChild('hawking', { static: false }) myClass: ElementRef;
  constructor(private router: Router, private sanitizer: DomSanitizer,
    private renderer2: Renderer2, private el: ElementRef,
    private resumeService: ResumeService, private componentService: AddCpmponentService) {

    //  console.log(this.router.url);
    //  this.router.navigate(['/edit/james']);
  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
    this.ads = this.componentService.getPageComponents();
  }


  onChangeColorHex8(color: string, color2: string) {


    let borderColor = this.myClass.nativeElement.querySelectorAll('.border-color');
    let bgColor = this.myClass.nativeElement.querySelectorAll('.bg-color');
    let forntColor = this.myClass.nativeElement.querySelectorAll('.font-color')

    borderColor.forEach(e => {
      console.log('myClass23', e)
      this.renderer2.setStyle(e, 'border-color', color);
    });
    bgColor.forEach(e => {
      console.log('myClass23', e)
      this.renderer2.setStyle(e, 'background', color);
    })
    forntColor.forEach(e => {
      console.log('myClass23', e)
      this.renderer2.setStyle(e, 'color', color);
    })

  }


}
