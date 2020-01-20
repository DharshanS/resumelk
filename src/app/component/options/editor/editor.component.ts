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
import { EditorService } from "../editor.service";
import { DynamicComponentsService } from "../dynamic-components.service";
import { TextComponent } from "../section/text/text.component";
import { Personal } from "../section/personal/Personal";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
  entryComponents: [TextComponent]
})
export class EditorComponent implements OnInit, AfterViewInit,AfterContentChecked {




  isShow: boolean;
  topPosToStartShowing = 50;


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

  //personalInfoGroup: FormGroup;
  constructor(
    private resolver: ComponentFactoryResolver,
    private sections: EditorService,
    private custom: DynamicComponentsService,
    private resume: EditorService,
    private resolve: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    this.date = new FormControl(new Date());
    this.serializedDate = new FormControl(new Date().toISOString());

  }

  listUpdate(item) {
    const factory = this.resolve.resolveComponentFactory(item.component);
    let componentRef = this.container.createComponent(factory);
    componentRef.instance.title = "Text";
    this.componentRefList.push(componentRef);
  }

//method notified by list componant when user add the new componant
  scrollToElement($event){
      console.log("scrollToElement notified"+$event)
      setTimeout(() => {
        let el = document.getElementById($event);
        el.scrollIntoView({ behavior: "smooth", block: "end" ,inline:"end"});
      }, 100);
  }


  ngAfterViewInit() {
    console.log("after view init");
    // Hack: Scrolls to top of Page after page view initialized
    this.top = document.getElementById("top");

  }

  savePersonlInfor() {}


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
    console.debug("Scroll Event");
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
      el.scrollIntoView({ behavior: "smooth", block: "end" ,inline:"end"});
    }, 100);

  }

  onScroll($event){
    alert('test')
    console.log($event);
  }
}
