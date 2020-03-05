import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Skill, SkillName } from './Skill';
import { ResumeService } from "../../../../resume.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, AfterContentChecked {


  @Input() flag: boolean;
  selected = 0;
  constructor(public resumeService: ResumeService) { }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if (this.flag && this.resumeService.checklenthOfarray(this.resumeService.resumeComponents.skills)) {
      this.resumeService.resumeComponents.skills.push(new Skill());
    }

  }
  addNewSkillCategory() {
    this.resumeService.resumeComponents.skills.push(new Skill());


  }

  addNewSkill(j, i) {
    this.resumeService.resumeComponents.skills[j].skillNames.push(new SkillName())
  }

  selectedItem(i) {

    this.selected = i;
  }

  removeSkillCategory(index) {
    if (index !== 0)
      this.resumeService.resumeComponents.skills.splice(index, 1);
  }
  removeSkill(j, i) {
    if (i !== 0)
      this.resumeService.resumeComponents.skills[j].skillNames.splice(i, 1);
  }

}
