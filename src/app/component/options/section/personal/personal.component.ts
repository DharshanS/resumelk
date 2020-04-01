import { Component, OnInit, Input, HostListener } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeService } from "../../../../resume.service";
import { Router } from "@angular/router";
import { Personal } from './Personal';
import { ImageCroppedEvent, ImageTransform, Dimensions } from 'ngx-image-cropper';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.scss"],
})
export class PersonalComponent implements OnInit {


  // onKeyUp() {
  //   this.resumeService.updateResume();
  // }

  @HostListener('document:keypress') onKeydownHandler() {
    this.resumeService.updateResume();
  }

  public Editor = ClassicEditor;
  @Input() flag: boolean;
  isLengthIsAbove = false;
  scale = 1;

  transform: ImageTransform = {};
  showCropper = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  userProfileUpload = false;
  containWithinAspectRatio = 0;

  file: any;
  // @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  constructor(
    public resumeService: ResumeService,
    private router: Router,
    private http: HttpClient
  ) { }


  ngOnInit() {
    if (this.resumeService.resumeComponents.personal == null) {
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
    this.file = event.target.files[0]
    console.log("file change event")

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    var blob = new Blob([event.base64], { type: 'image/png' });
    this.file = new File([blob], this.getFileName());
  }
  getFileName() {
    return this.resumeService.resumeComponents.personal.firstName + new Date().getTime() + '.png';
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
    this.resumeService.profileImagePost(this.file).subscribe(data => {
      this.resumeService.resumeComponents.personal.profilePic = data['key'];
    });

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
