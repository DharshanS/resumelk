import { Component, OnInit, Input, DoCheck, AfterContentChecked } from "@angular/core";
import { EditorService } from "../../editor.service";
import { WorkExperiance } from "./experience";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ResumeService } from "../../../../resume.service";
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  @Input() flag: boolean;
  public Editor = ClassicEditor;
  selectedExperiance = 0;

  constructor(public editorService: EditorService, public resumeService: ResumeService, private utilityService: UtilityService) { }

  ngOnInit() {
    console.log("Experiance ")
    console.log(this.resumeService.resumeComponents.workExperiance);
  }

  addNewExperience(): void {
    this.createNewExperianceObject();
  }

  removeExperience(index: number): void {
    if (index !== 0) this.resumeService.resumeComponents.workExperiance.splice(index, 1);
  }
  removeExperienceCompanent(name: string): void {
    this.editorService.removeComponent(name);
    this.resumeService.resumeComponents.workExperiance = [];
    this.flag = false;
  }

  selectedExperianceItem(index: number): void {
    this.selectedExperiance = index;
    console.log(this.selectedExperiance);
  }
  createNewExperianceObject(): void {
    this.resumeService.resumeComponents.workExperiance.push(new WorkExperiance())
  }

  ngAfterContentChecked(): void {
    if (this.flag && this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.workExperiance)) {
      this.createNewExperianceObject();
    }


  }

}
