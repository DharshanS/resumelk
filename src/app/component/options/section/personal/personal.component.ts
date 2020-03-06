import { Component, OnInit, Input, HostListener, DoCheck, AfterContentChecked } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeService } from "../../../../resume.service";
import { Router } from "@angular/router";
import { Personal } from './Personal';


@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],

})
export class PersonalComponent implements OnInit {

  ngAfterContentChecked(): void {
    if (this.flag && this.resumeService.resumeComponents.personal == null) {
      this.resumeService.resumeComponents.personal = new Personal();
    }
  }
  public Editor = ClassicEditor;
  @Input() flag: boolean;
  @Input() personal: Personal;



  constructor(
    public resumeService: ResumeService,
    private router: Router
  ) { }


  ngOnInit() {

  }


  goToPreview() {
    this.router.navigate(["/preview"]);
  }




}
