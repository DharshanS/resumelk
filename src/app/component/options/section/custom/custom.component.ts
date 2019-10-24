import { Component, OnInit,Input,OnDestroy,ComponentFactoryResolver,ViewChild,ViewContainerRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'



@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements  OnInit, OnDestroy  {




  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }




}



