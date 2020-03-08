import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Referance } from './Referance';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
import { EditorService } from '../../editor.service';
@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.css']
})
export class ReferancesComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.flag && this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.referances)) {
      this.addNewReferance();
    }
  }

  constructor(public resumeService: ResumeService, private utilityService: UtilityService, private editorService: EditorService) { }

  public Editor = ClassicEditor;
  @Input() flag: boolean;
  selectedReferance = 0;
  ngOnInit() {

  }


  addNewReferance() {
    this.resumeService.resumeComponents.referances.push(new Referance())
  }

  selectReferanceItem(i: number) {
    this.selectedReferance = i;

  }
  removeReferance(index: number) {
    if (index !== 0) this.resumeService.resumeComponents.certificates.splice(index, 1);
    this.selectedReferance = 0;
  }

  removeReferanceComponent() {
    this.editorService.removeComponent('referance')
  }
}
