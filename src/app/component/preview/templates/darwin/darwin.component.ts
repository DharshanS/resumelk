import { Component, OnInit, Renderer2, ComponentFactoryResolver, ElementRef, ViewChild, AfterViewInit, ViewContainerRef, ComponentFactory } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
import { PageComponent } from '../page-component';
import { Input } from '@angular/core';
import { ResumeDirective } from '../page.directive';
import { AddCpmponentService } from '../../template.service';
import { ResumePage } from '../resume-page/resume-page.component';
@Component({
  selector: "app-darwin",
  templateUrl: "./darwin.component.html",
  styleUrls: ["./darwin.component.scss"]
})
export class DarwinComponent implements OnInit {
 
  @ViewChild("darwin", { static: false }) darwinPage: ElementRef;
  darwinPage2 = true;
  templateData: any;
  page2Class = "secondPageEes";
  componentList: any[] = new Array();


  @Input() ads: PageComponent[];
  currentAdIndex = -1;
  @ViewChild(ResumeDirective, { static: false }) resumePage: ResumeDirective;

  constructor(
    public resumeService: ResumeService,
    private resuemComponentService: AddCpmponentService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer2: Renderer2, private el: ElementRef, private urilityService: UtilityService) {

  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      if (this.urilityService.isObjectIsNotNull(this.resumeService.resumeComponents)) {
        //  this.darwinPage2 = this.urilityService.templatePageBreak(this.darwinPage, this.page2Class);
        this.loadComponent();
      }
    }, 1000)

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
    this.ads = this.resuemComponentService.getPageComponents();



  }



  loadComponent() {
    this.componentList = this.urilityService.pageElementsHTML(this.darwinPage);
    console.log(this.darwinPage)
    // let adItem = this.ads[0];
    //adItem.data = this.urilityService.pageElementsHTML(this.darwinPage);
    // console.log(adItem.data)
    // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // let viewContainerRef = this.resumePage.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<PageComponent>componentRef.instance).data = adItem.data;
    // this.componentList.push(componentRef);
  }



}//711327574

