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
  constructor(    private resumeService: ResumeBucket) { }

  ngOnInit() {
    if( this.resumeService._resume.skills.length==0)
    this.resumeService._resume.skills.push(new Skill())

  }

  addNewSkillCategory() {
    this.resumeService._resume.skills.push(new Skill());


  }

  addNewSkill(j,i) {
    this.resumeService._resume.skills[j].skillNames.push(new SkillName())
  }

  selectedItem(i){

    this.selected=i;
  }

  removeSkillCategory(index){
    if(index!==0)
    this.resumeService._resume.skills.splice(index,1);
  }
  removeSkill(j,i){
    if(i!==0)
    this.resumeService._resume.skills[j].skillNames.splice(i,1);
  }

}
