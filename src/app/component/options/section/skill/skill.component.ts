import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {


  @Input() flag:boolean;

  skillNames = [{ "skillName": "", "skillLevel": "" }];

  selected=0;

  skillCategories = [];

  skill = {
    "skillCategoryName": "Skill #",
    "skillNames": this.skillNames
  }


  constructor() { }

  ngOnInit() {
    this.skillCategories.push(this.skill)
  }

  addNewSkillCategory() {
    this.skillCategories.push({
      "skillCategoryName": "",
      "skillNames": [{ "skillName": "", "skillLevel": "" }]
    })

  }

  addNewSkill(j,i) {
    this.skillCategories[j].skillNames.push({ "skillName": "", "skillLevel": "" })
  }

  selectedItem(i){

    this.selected=i;
  }

  removeSkillCategory(index){
    if(index!==0)
    this.skillCategories.splice(index,1);
  }
  removeSkill(j,i){
    if(i!==0)
    this.skillCategories[j].skillNames.splice(i,1);
  }

}
