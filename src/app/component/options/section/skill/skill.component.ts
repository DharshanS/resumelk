import { Component, OnInit,Input } from '@angular/core';
import { Skill, SkillName } from './Skill';
import { ResumeBucket } from "../../../../resume.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {


  @Input() flag:boolean;



  selected=0;

  skillCategories = [];




  constructor(    private resumeService: ResumeBucket) { }

  ngOnInit() {
    this.skillCategories.push(new Skill())
    this.resumeService._resume.skills=this.skillCategories;
  }

  addNewSkillCategory() {
    this.skillCategories.push(new Skill());


  }

  addNewSkill(j,i) {
    this.skillCategories[j].skillNames.push(new SkillName())
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
