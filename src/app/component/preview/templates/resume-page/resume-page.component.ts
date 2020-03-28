import { Component, Renderer2, ViewEncapsulation, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TemplateComponent } from '../template-components';

@Component({
  selector: 'resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
})
export class ResumePage implements TemplateComponent, AfterViewInit {

  @ViewChild('htmlPage', { static: true }) innerHtml: ElementRef;

  @Input() data: any;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.appendChild(this.innerHtml.nativeElement, this.data)
    }, 2000)
  }

  ngAfterViewInit() {


  }




}
