import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ResumeBucket } from "../../../../resume.service";
import { EditorService } from "../../../options/editor.service";

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
    private el: ElementRef,
    private sections:EditorService
  ) {}

  ngOnInit() {
    this.__resume = this.resumeService._resume;
    console.log("---Inside ngOnInit---");
    console.log(this.__resume.personal);
    this.getResume()
  }

  getResume(){
    let userCode=8
    this.sections.getResume(userCode).subscribe((data:any[])=>{
      console.log("get response");

      this.__resume=data[0].resumeJson;
      this.__resume.currentTemplate=data[0].resumeName;

      console.log("preview response");
      console.log(this.__resume);
      //this.resume._resume=data['body']['resumeJson'];
    })
  }
}
