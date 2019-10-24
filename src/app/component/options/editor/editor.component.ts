import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';

import * as $ from 'jquery';
import{FormControl,FormGroup} from '@angular/forms';
import {ScrollEvent} from  'ngx-scroll-event';
import { EditorService } from '../editor.service';
import { DynamicComponentsService }         from '../dynamic-components.service';

import { TextComponent } from '../section/text/text.component';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  entryComponents: [TextComponent]

})
export class EditorComponent implements OnInit {

  date;
  serializedDate;
  top;
  displayScrollButton="none";


  componentRef: any;
  componentRefList: any[] = [];

  components: [TextComponent];
  @ViewChild('customContainer', {  static: true,read: ViewContainerRef }) container;

    //personalInfoGroup: FormGroup;
    constructor(private resolver: ComponentFactoryResolver,
      private sections:EditorService,
      private custom: DynamicComponentsService,
      private editor: EditorService,
      private resolve:ComponentFactoryResolver) {

    }




    ngOnInit() {

      this.date = new FormControl(new Date());
      this.serializedDate = new FormControl((new Date()).toISOString());


    }





  listUpdate(item){

   // this.container.clear();

      const factory=this.resolve.resolveComponentFactory(item.component);
      let componentRef=this.container.createComponent(factory);
      componentRef.instance.title="Text";
      this.componentRefList.push(componentRef)
    }



    ngAfterViewInit() {
      // Hack: Scrolls to top of Page after page view initialized
      this.top = document.getElementById('top');



    }




    savePersonlInfor() {

    }


    public handleScroll(event: ScrollEvent) {

    // if($(document).scrollTop()>150){
    //   this.displayScrollButton="block";
    // }

      if (event.isReachingBottom) {

      }
      if (event.isReachingTop) {
        this.displayScrollButton="none";

      }
      if (event.isWindowEvent) {

      }

    }

    public scrollUp(){

      this.top.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    }





}
