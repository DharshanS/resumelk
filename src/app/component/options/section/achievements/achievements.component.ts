import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Acheivment } from './Achivment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ResumeService } from "../../../../resume.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit, AfterContentChecked {


  __achivements = [];
  selected = 0;
  public Editor = ClassicEditor;



  @Input() flag: boolean;


  constructor(public resumeService: ResumeService) { }

  ngOnInit() {

  }

  addAchivements() {
    this.resumeService.resumeComponents.achivements.push(new Acheivment())
  }
  removeAchivements(index) {
    if (index != 0)
      this.resumeService.resumeComponents.achivements.splice(index, 1);

  }

  selectedItem(i) {
    this.selected = i;
  }

  ngAfterContentChecked() {
    if (this.flag && this.resumeService.resumeComponents.achivements.length == 0) {
      this.resumeService.resumeComponents.achivements.push(new Acheivment())
    }
  }


}
