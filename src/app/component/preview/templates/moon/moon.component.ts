import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ResumeService } from "../../../../resume.service";

@Component({
  selector: "app-temp-three",
  templateUrl: "./moon.component.html",
  styleUrls: ["./moon.component.scss"]
})
export class MoonComponent implements OnInit {
  resumeComponents: any;

  constructor(
    private resumeService: ResumeService,
    private sanitizer: DomSanitizer,
    private renderer2: Renderer2,
    private el: ElementRef,

  ) { }

  ngOnInit() {
    this.loadResume();
  }

  loadResume() {
    this.resumeComponents = this.resumeService.resumeObject['resumeJson'];
  }
}
