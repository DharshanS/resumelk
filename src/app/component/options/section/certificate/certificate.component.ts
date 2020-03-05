import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Certificate } from "./Certificate";
import { ResumeService } from "../../../../resume.service";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.css"]
})
export class CertificateComponent implements OnInit {
  @Input() flag: boolean;
  public Editor = ClassicEditor;

  selectedCertificate = 0;
  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.flag) {
      if (this.resumeService.checklenthOfarray(this.resumeService.resumeComponents.certificates)) {
        this.resumeService.resumeComponents.certificates.push(new Certificate());
      }
    }
  }

  addNewCertificate() {
    this.resumeService.resumeComponents.certificates.push(new Certificate());
  }
  removeCertificate(index) {
    if (index !== 0) this.resumeService.resumeComponents.certificates.splice(index, 1);
  }

  selectedItem(i) {
    this.selectedCertificate = i;
  }
}
