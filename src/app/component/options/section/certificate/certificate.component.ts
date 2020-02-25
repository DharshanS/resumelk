import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Certificate } from "./Certificate";
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.css"]
})
export class CertificateComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @Input() flag: boolean;
  public Editor = ClassicEditor;


  selected = 0;
  constructor(public resumeService: ResumeBucket) { }

  ngOnInit() {
    console.log("Certifate initiated...")


  }

  ngAfterViewInit() {

    console.log("Certifate view initiated...")

  }

  ngAfterContentChecked() {

    if (this.flag) {
      if (this.resumeService.checklenthOfarray(this.resumeService._resume.certificates)) {
        this.resumeService._resume.certificates.push(new Certificate());
      }
    }




  }

  addNewCertificate() {
    this.resumeService._resume.certificates.push(new Certificate());
  }
  removeCertificate(index) {
    if (index !== 0) this.resumeService._resume.certificates.splice(index, 1);
  }

  selectedItem(i) {
    this.selected = i;
  }
}
