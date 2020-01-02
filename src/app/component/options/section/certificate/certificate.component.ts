import { Component, OnInit, Input } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Certificate } from "./Certificate";
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.css"]
})
export class CertificateComponent implements OnInit {
  @Input() flag: boolean;
  public Editor = ClassicEditor;

  certificates = [];
  selected = 0;
  constructor( private resumeService: ResumeBucket) {}

  ngOnInit() {
    this.certificates = [new Certificate()];
    this.resumeService._resume.certificates=this.certificates;
  }

  addNewCertificate() {
    this.certificates.push(new Certificate());
  }
  removeCertificate(index) {
    if (index !== 0) this.certificates.splice(index, 1);
  }

  selectedItem(i) {
    this.selected = i;
  }
}
