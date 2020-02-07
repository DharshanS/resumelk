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


}
