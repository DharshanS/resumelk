import { Component, OnInit, Renderer2,ComponentFactoryResolver, ViewEncapsulation, ElementRef, ViewChild, Input } from '@angular/core';
import resumeJson from '../../../../../assets/json/resume.json';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ResumeService } from "../../../../resume.service";
import { DomSanitizer } from '@angular/platform-browser';
import { EditorService } from "../../../options/editor.service";
import { PageComponent } from '../page-component';
import { UtilityService } from 'src/app/utility.service';
import { ResumeDirective } from '../page.directive';
import { AddCpmponentService } from '../../template.service';

@Component({

  selector: 'app-hawking',
  templateUrl: './hawking.component.html',
  styleUrls: ['./hawking.component.scss'],
})
export class HawkingComponent implements OnInit {

  
  
  @ViewChild("hawking", { static: false }) hawkingPage: ElementRef;
  hawkingPage2 = true;
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
    this.componentList = this.urilityService.pageElementsHTML(this.hawkingPage);
    console.log(this.hawkingPage)
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
