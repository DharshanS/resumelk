import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { Publication } from './Publication';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.flag && this.utilityService.isLengthOfZero(this.resumeService.resumeComponents.publications)) {
      this.addPublication();
    }
  }

  @Input() flag: boolean;


  public Editor = ClassicEditor;
  selected = 0;


  constructor(public resumeService: ResumeService, private utilityService: UtilityService) { }

  publications = [];

  ngOnInit() {

  }

  addPublication() {
    this.resumeService.resumeComponents.publications.push(new Publication())
  }
  removePublication(index: number) {
    if (index != 0)
      this.publications.splice(index, 1);

  }

  selectedItem(index: number) {
    this.selected = index;
  }

}
