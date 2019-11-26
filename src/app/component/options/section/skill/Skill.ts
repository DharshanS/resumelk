


export class Skill{
  skillCategoryName:string;
  skillNames:Array<SkillName>=new Array();

  constructor(){
    this.skillNames[0]=new SkillName();
  }

}

export class SkillName{
  skillName:string;
  skillLevel:string;
}

