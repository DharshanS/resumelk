import { Component, OnInit, Renderer2,ComponentFactoryResolver, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from '../../../../utility.service';
import { PageComponent } from '../page-component';
import { ResumeDirective } from '../page.directive';
import { AddCpmponentService } from '../../template.service';



@Component({

  selector: 'newton',
  templateUrl: './newton.component.html',
  styleUrls: ['./newton.component.scss'],
})
export class NewtonComponent implements OnInit, AfterViewInit {

  @ViewChild("newton", { static: false }) newtonPage: ElementRef;
  templateData: any;
  page2Class = "secondPageEes";
  newtonPage2 = false;
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
        //  this.einsteinPage2 = this.urilityService.templatePageBreak(this.einsteinPage, this.page2Class);
        this.loadComponent();
      }
    }, 1000)

  }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
    this.ads = this.resuemComponentService.getPageComponents();



  }



  loadComponent() {
    this.componentList = this.urilityService.pageElementsHTML(this.newtonPage);
    console.log(this.newtonPage)
    // let adItem = this.ads[0];
    //adItem.data = this.urilityService.pageElementsHTML(this.einsteinPage);
    // console.log(adItem.data)
    // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // let viewContainerRef = this.resumePage.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<PageComponent>componentRef.instance).data = adItem.data;
    // this.componentList.push(componentRef);
  }



}//711327574
