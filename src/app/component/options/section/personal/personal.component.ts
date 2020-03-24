import { Component, OnInit, Input, HostListener, DoCheck, AfterContentChecked } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeService } from "../../../../resume.service";
import { Router } from "@angular/router";
import { Personal } from './Personal';
import { ImageCroppedEvent, ImageTransform, Dimensions } from 'ngx-image-cropper';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { UtilityService } from 'src/app/utility.service';
@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }

})
export class PersonalComponent implements OnInit {


  onKeyUp() {
    this.resumeService.updateResume();
  }

  public Editor = ClassicEditor;
  @Input() flag: boolean;
  @Input() personal: Personal;
  isLengthIsAbove = false;
  scale = 1;
  transform: ImageTransform = {};
  showCropper = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  userProfileUpload = false;
  // @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  constructor(
    public resumeService: ResumeService,
    private router: Router,

  ) { }


  ngOnInit() {
    if (this.flag && this.resumeService.resumeComponents.personal == null) {
      this.createPerson();
    }
  }


  goToPreview() {
    this.router.navigate(["/preview"]);
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('cicked');
  }

  createPerson() {
    this.resumeService.resumeComponents.personal = new Personal();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(this.imageChangedEvent);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    // show message
  }

  userProfileImageUpload() {
    console.log("userProfileUpload" + this.userProfileUpload)
  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log()
    if (data.length > 100) {
      this.isLengthIsAbove = true;
    } else {
      this.isLengthIsAbove = false;
    }
  }
  zoomOut() {
    console.log("zoom out...")
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }


}
