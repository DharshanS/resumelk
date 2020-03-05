import { Component, OnInit, Renderer2, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {


  @ViewChild('hawking', { static: false }) myClass: ElementRef;
  constructor(private router: Router, private sanitizer: DomSanitizer,
    private renderer2: Renderer2, private el: ElementRef, private resumeService: ResumeService) {

    //  console.log(this.router.url);
    //  this.router.navigate(['/edit/james']);
  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }


  onChangeColorHex8(color: string, color2: string) {
    console.log('color', color)

    let names = this.myClass.nativeElement.querySelectorAll('.color-2');

    console.log('myClass', names)
    names.forEach(e => {
      console.log('myClass23', e)
      this.renderer2.setStyle(e, 'border-color', color);
    })

  }


}
