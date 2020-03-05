import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ResumeService } from "../../../../resume.service";
import { Publication } from './Publication';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.flag && this.resumeService.resumeComponents.publications.length == 0) {

      this.resumeService.resumeComponents.publications.push(new Publication())
    }
  }

  @Input() flag: boolean;


  public Editor = ClassicEditor;
  selected = 0;


  constructor(public resumeService: ResumeService) { }

  publications = [];

  ngOnInit() {

  }

  addPublication() {
    this.publications.push(new Publication())
  }
  removePublication(index) {
    if (index != 0)
      this.publications.splice(index, 1);

  }

  selectedItem(index) {
    this.selected = index;
  }

}
