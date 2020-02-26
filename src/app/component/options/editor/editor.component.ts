import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  AfterViewInit,
  AfterContentChecked,
  Inject,
  HostListener
} from "@angular/core";

import { DOCUMENT } from '@angular/common';
import * as $ from "jquery";
import { FormControl } from "@angular/forms";
import { ScrollEvent } from "ngx-scroll-event";
import {ResumeReq} from "../../../resumeReq";
import { EditorService } from "../editor.service";
import { DynamicComponentsService } from "../dynamic-components.service";
import { TextComponent } from "../section/text/text.component";
import { Personal } from "../section/personal/Personal";
import { ResumeBucket } from 'src/app/resume.service';

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
  entryComponents: [TextComponent]
})
export class EditorComponent implements OnInit, AfterViewInit, AfterContentChecked {
  isShow: boolean;
  topPosToStartShowing = 50;
  gotoTopShow: boolean = false;

  date;
  serializedDate;
  top;
  displayScrollButton = "none";

  personal = new Personal();

  componentRef: any;
  componentRefList: any[] = [];

  components: [TextComponent];

  @ViewChild("customContainer", { static: true, read: ViewContainerRef }) container;
  @ViewChild("experience", { static: true, read: ElementRef }) experiance;

  resumeObject:ResumeReq;

  //personalInfoGroup: FormGroup;
  constructor(
    public resolver: ComponentFactoryResolver,
    public sections: EditorService,
    public resume:ResumeBucket,
    public custom: DynamicComponentsService,
    public resolve: ComponentFactoryResolver,
    @Inject(DOCUMENT) public document: Document

  ) {
    console.log(this.document.location.href);
    document.addEventListener('scroll', function() {
      console.log('keys pressed');
   });
  }

  ngOnInit() {
    this.date = new FormControl(new Date());
    this.serializedDate = new FormControl(new Date().toISOString());
    this.resumeObject=new ResumeReq();
    this.resume.loadResume(8)
    this.getResume();

  }


  onWScroll(e: any) {
    console.log("onWScroll", e);
    this.gotoTopShow = true;
  }

  listUpdate(item) {
    const factory = this.resolve.resolveComponentFactory(item.component);
    let componentRef = this.container.createComponent(factory);
    componentRef.instance.title = "Text";
    this.componentRefList.push(componentRef);

  }

  //method notified by list componant when user add the new componant
  scrollToElement($event) {
    console.log("scrollToElement notified" + $event)
    setTimeout(() => {
      console.log($event);
      let el = document.getElementById($event);
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, 100);


      // this.gotoTopShow = true;

      // var introTexts = document.querySelector('goto-top');
      // var introPosition =introTexts.getBoundingClientRect().top;
      // console.log("screenPosition"+introPosition);
      // introTexts.classList.add('intro-appear');

      // introTexts.forEach(e =>{
      //     var introPosition = e.getBoundingClientRect().top;
      //     console.log(introPosition);
      //     var screenPosition = window.innerHeight ;
      // if(introPosition < screenPosition){
      //     e.classList.add('intro-appear');
      // }
      // console.log("screenPosition"+screenPosition);

      // })
  }


  ngAfterViewInit() {

    this.top = document.getElementById("top");

  }


  onClick(event) {
    console.log("event"+event);
  }




  public scrollUp() {
    this.top.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngAfterContentChecked() {

    console.log("ngAfterContentChecked editor");


  }

  @HostListener('scroll', ['$event'])
  scrollHandler(event) {
  //  console.debug("Scroll Event");
  }


  checkScroll() {

    console.log("Log...")
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {

    setTimeout(() => {
      let el = document.getElementById('personal');
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, 100);

  }

  onScroll($event) {
    console.log($event);
  }

  createResume(){
    this.resumeObject.userId=8;
    this.resumeObject.userName="Dharshan";
    this.resumeObject.templateId=1;
    this.resumeObject.resumeJson={
     name:"Dharshan"
    }

  }


  async updateOption() {

  this.resumeObject.resumeJson=this.resume._resume;
  this.resumeObject.resumeName='californiSmall';
  console.log(this.resumeObject.resumeJson);
   this.sections.updateResume(this.resumeObject);
  }


  getResume(){
    let userCode=8
    this.sections.getResume(userCode).subscribe((data:any[])=>{
      console.log("get response");
      this.resume._resume=data[0].resumeJson;
      this.resume._currentTemplate=data[0].resumeName;

      //this.resume._resume=data['body']['resumeJson'];
    })
  }
}
