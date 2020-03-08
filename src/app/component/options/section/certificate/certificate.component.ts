import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Certificate } from "./Certificate";
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
import { EditorService } from '../../editor.service';

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.css"]
})
export class CertificateComponent implements OnInit {
  @Input() flag: boolean;
  public Editor = ClassicEditor;

  selectedCertificate = 0;
  constructor(public resumeService: ResumeService, private utilityService: UtilityService, private editorService: EditorService) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.flag) {
      if (this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.certificates)) {
        this.addNewCertificate();
      }
    }
  }

  addNewCertificate() {
    this.resumeService.resumeComponents.certificates.push(new Certificate());
  }
  removeCertificate(index) {
    if (index !== 0) this.resumeService.resumeComponents.certificates.splice(index, 1);
    this.selectedCertificate = 0;
  }

  selectCertificateItem(i: number) {
    this.selectedCertificate = i;
  }
  removeCertificateComponent() {
    this.editorService.removeComponent('certifications');
  }
}
