import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  HostListener,
  AfterViewInit
} from "@angular/core";

import { DOCUMENT } from '@angular/common';
import { FormControl } from "@angular/forms";
import { ResumeReq } from "../../../resumeReq";
import { EditorService } from "../editor.service";
import { DynamicComponentsService } from "../dynamic-components.service";
import { TextComponent } from "../section/text/text.component";
import { Personal } from "../section/personal/Personal";
import { ResumeService } from 'src/app/resume.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
  host: { 'window:beforeunload': 'doSomething' },
  entryComponents: [TextComponent]
})
export class EditorComponent implements OnInit, AfterViewInit {
  isShow: boolean;
  topPosToStartShowing = 50;
  gotoTopShow: boolean = false;
  date;
  serializedDate;
  top;
  displayScrollButton = "none";
  flag = true;
  personal = new Personal();
  componentRef: any;
  componentRefList: any[] = [];

  components: [TextComponent];
  @ViewChild("customContainer", { static: true, read: ViewContainerRef }) container;
  @ViewChild("experience", { static: true, read: ElementRef }) experiance;
  isProfilePic = false;
  resumeObject: ResumeReq;
  constructor(
    public resolver: ComponentFactoryResolver,
    public sections: EditorService,
    public resumeService: ResumeService,
    public custom: DynamicComponentsService,
    public resolve: ComponentFactoryResolver,

    @Inject(DOCUMENT) public document: Document

  ) {

    document.addEventListener('scroll', function () {
      console.log('keys pressed');
    });

  }
  @HostListener('window:beforeunload', ['$event'])
  doSomething($event) {
    $event.returnValue = 'Your data will be lost!';
  }

  ngOnInit() {
    this.date = new FormControl(new Date());
    this.serializedDate = new FormControl(new Date().toISOString());
    setTimeout(() => {
      if (this.resumeService.resumeComponents.personal.profilePic != null) {

        this.isProfilePic = true;
      }
    }
      , 2000);


  }


  resumeInitializer() {
    if (this.resumeObject == null) {
      this.resumeService.loadResumeComponentsJson();
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

  onScroll($event: any) {
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


  async updateResumeTemplate() {
    this.resumeService.updateResume()
  }


}
