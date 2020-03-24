import { Component, OnInit, Renderer2, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import { TemplateComponent } from '../template-components';

@Component({
  selector: 'resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
})
export class ResumePage implements TemplateComponent {


  @Input() data: any;
  constructor(private renderer: Renderer2) { }






}
