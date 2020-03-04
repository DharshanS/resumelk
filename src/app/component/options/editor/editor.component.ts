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
import { ResumeReq } from "../../../resumeReq";
import { EditorService } from "../editor.service";
import { DynamicComponentsService } from "../dynamic-components.service";
import { TextComponent } from "../section/text/text.component";
import { Personal } from "../section/personal/Personal";
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
  entryComponents: [TextComponent]
})
export class EditorComponent implements OnInit {
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

  resumeObject: ResumeReq;
  constructor(
    public resolver: ComponentFactoryResolver,
    public sections: EditorService,
    public resume: ResumeService,
    public custom: DynamicComponentsService,
    public resolve: ComponentFactoryResolver,
    @Inject(DOCUMENT) public document: Document

  ) {

    document.addEventListener('scroll', function () {
      console.log('keys pressed');
    });

  }

  ngOnInit() {
    this.date = new FormControl(new Date());
    this.serializedDate = new FormControl(new Date().toISOString());

  }


  resumeInitializer() {
    if (this.resumeObject == null) {
      this.resume.loadResume();
    }
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


  scrollToElement($event) {
    console.log("scrollToElement notified" + $event)
    setTimeout(() => {
      console.log($event);
      let el = document.getElementById($event);
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, 100);
  }


  ngAfterViewInit() {
    this.top = document.getElementById("top");
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


  checkScroll() {
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

  createResume() {
    this.resumeObject.userId = 8;
    this.resumeObject.userName = "Dharshan";
    this.resumeObject.templateId = 1;
    this.resumeObject.resumeJson = {
      name: "Dharshan"
    }

  }


  async updateResume() {
  }


}
