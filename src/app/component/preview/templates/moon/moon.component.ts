import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: "app-temp-three",
  templateUrl: "./moon.component.html",
  styleUrls: ["./moon.component.scss"]
})
export class MoonComponent implements OnInit {
  __resume: any;

  constructor(
    private resumeService: ResumeBucket,
    private sanitizer: DomSanitizer,
    private renderer2: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.__resume = this.resumeService._resume;
    console.log("---Inside ngOnInit---");
    console.log(this.__resume.personal);
  }

  onChangeColorHex8(color: string, color2: string) {
    console.log("color", color);
    // this.renderer2.setStyle(this.el.nativeElement.querySelector('.name'), 'color', color);
    let myClass = this.el.nativeElement.querySelectorAll(".temp-header");
    let names = this.el.nativeElement.querySelectorAll(".name");
    let title_boxs = this.el.nativeElement.querySelectorAll(".title-box");
    let title_icons = this.el.nativeElement.querySelectorAll(".title-icon");
    let key_skills_boxs = this.el.nativeElement.querySelectorAll(
      ".key-skills-box"
    );

    console.log("myClass", myClass);
    myClass.forEach(e => {
      console.log("myClass23", e);
      this.renderer2.setStyle(e, "background", color);
    });
    title_icons.forEach(e => {
      console.log("myClass23", e);
      this.renderer2.setStyle(e, "background", color);
    });
    key_skills_boxs.forEach(e => {
      console.log("myClass23", e);
      this.renderer2.setStyle(e, "background", color);
    });

    title_boxs.forEach(e => {
      console.log("myClass23", e);
      this.renderer2.setStyle(e, "color", color);
    });
    names.forEach(e => {
      this.renderer2.setStyle(e, "color", color2);
    });
  }
}
