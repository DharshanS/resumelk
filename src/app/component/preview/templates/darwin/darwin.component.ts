import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ResumeService } from "../../../../resume.service";

@Component({
  selector: "app-darwin",
  templateUrl: "./darwin.component.html",
  styleUrls: ["./darwin.component.scss"]
})
export class DarwinComponent implements OnInit {
  resumeComponents: any;

  constructor(
    public resumeService: ResumeService,
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