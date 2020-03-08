import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Skill, SkillName } from './Skill';
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';
import { EditorService } from '../../editor.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, AfterContentChecked {


  @Input() flag: boolean;
  selectedSkill = 0;
  constructor(public resumeService: ResumeService, public utilityService: UtilityService, public editorService: EditorService) { }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if (this.flag && this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.skills)) {
      this.addNewSkillCategory();
    }

  }
  addNewSkillCategory() {
    this.resumeService.resumeComponents.skills.push(new Skill());
  }

  addNewSkill(j: number, i: number) {
    this.resumeService.resumeComponents.skills[j].skillNames.push(new SkillName())
  }

  selectedSkillItem(i: number) {
    this.selectedSkill = i;
  }

  removeSkillCategory(index: number) {
    if (index !== 0)
      this.resumeService.resumeComponents.skills.splice(index, 1);
  }
  removeSkill(j: number, i: number) {
    if (i !== 0)
      this.resumeService.resumeComponents.skills[j].skillNames.splice(i, 1);
  }
  removeSkillComponant() {
    this.resumeService.resumeComponents.skills = [];
    this.editorService.removeComponent('skill');
  }
}
