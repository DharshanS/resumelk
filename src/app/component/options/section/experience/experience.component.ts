import { Component, OnInit , Input} from '@angular/core';
import { EditorService } from '../../editor.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {



  @Input() flag:boolean;

work_experiences=[];

public Editor = ClassicEditor;
selected=0;

  constructor(private editor:EditorService) { }

  ngOnInit() {

    this.work_experiences.push(this.editor.work_experience)

  }

  addexperience(){
    this.work_experiences.push( {
      "companyName":"Experinace #",
      "jobTitle":"",
      "country":"",
      "city":"",
      "timePeriod":{
        "from":{
          "month":"",
          "year":""
        },
        "to":{
          "month":"",
          "year":""
        }
      },
      "currentWork":false,
      "descrption":""
    })
  }

  removeExperience(index){
    if(index!==0)
this.work_experiences.splice(index,1);


  }

  selectedItem(index){
    this.selected=index;
  }

continue(){
  console.log(this.work_experiences)
}

}
