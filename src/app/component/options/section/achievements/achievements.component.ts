import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Acheivment } from './Achivment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeService } from "../../../../resume.service";
import { EditorService } from '../../editor.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit, AfterContentChecked {
  selected = 0;
  public Editor = ClassicEditor;
  @Input() flag: boolean;


  constructor(public resumeService: ResumeService, private editorService: EditorService) { }

  ngOnInit() {

  }

  addAchivements() {
    this.resumeService.resumeComponents.achivements.push(new Acheivment())
  }
  removeAchivements(index: number) {
    if (index != 0)
      this.resumeService.resumeComponents.achivements.splice(index, 1);

  }

  selectedItem(i: number) {
    this.selected = i;
  }

  ngAfterContentChecked() {
    if (this.flag && this.resumeService.resumeComponents.achivements.length == 0) {
      this.resumeService.resumeComponents.achivements.push(new Acheivment())
    }
  }

  removeAchiveComponent() {
    this.editorService.removeComponent('achievements')
  }

}
