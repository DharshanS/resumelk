import { Component, OnInit, Renderer2, ComponentFactoryResolver, ElementRef, ViewChild, AfterViewInit, ViewContainerRef, ComponentFactory } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
import { PageComponent } from '../page-component';
import { Input } from '@angular/core';
import { ResumeDirective } from '../page.directive';
import { AddCpmponentService } from '../../template.service';
import { ResumePage } from '../resume-page/resume-page.component';
@Component({
  selector: 'app-thomas-edison',
  templateUrl: './thomas-edison.component.html',
  styleUrls: ['./thomas-edison.component.scss']
})
export class ThomasEdisonComponent implements OnInit {

 
  @ViewChild("thomasEdison", { static: false }) thomasEdisonPage: ElementRef;
  thomasEdisonPage2 = true;
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
        //  this.thomasEdisonPage2 = this.urilityService.templatePageBreak(this.thomasEdisonPage, this.page2Class);
        this.loadComponent();
      }
    }, 1000)

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
    this.ads = this.resuemComponentService.getPageComponents();



  }



  loadComponent() {
    this.componentList = this.urilityService.pageElementsHTML(this.thomasEdisonPage);
    console.log(this.thomasEdisonPage)
    // let adItem = this.ads[0];
    //adItem.data = this.urilityService.pageElementsHTML(this.thomasEdisonPage);
    // console.log(adItem.data)
    // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // let viewContainerRef = this.resumePage.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<PageComponent>componentRef.instance).data = adItem.data;
    // this.componentList.push(componentRef);
  }



}//711327574


