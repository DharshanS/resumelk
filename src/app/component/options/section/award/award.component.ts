import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeService } from "../../../../resume.service";
import { Award } from './Award';
import { UtilityService } from 'src/app/utility.service';
import { EditorService } from '../../editor.service';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit, AfterContentChecked {

  public Editor = ClassicEditor;
  selectedAward = 0;
  @Input() flag: boolean;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(public resumeService: ResumeService, private utilityService: UtilityService, private editorService: EditorService
  ) { }

  ngOnInit() {

  }

  addNewAward() {
    this.resumeService.resumeComponents.awards.push(new Award())

  }
  removeAward(index: number) {
    if (index != 0)
      this.resumeService.resumeComponents.awards.splice(index, 1)
  }

  selectAwardItem(index: number) {
    this.selectedAward = index;
  }
  ngAfterContentChecked() {
    if (this.flag && this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.awards))
      this.addNewAward();
  }

  removeAwardComponant() {
    this.editorService.removeComponent('award');
    this.selectedAward = 0;
  }


}

