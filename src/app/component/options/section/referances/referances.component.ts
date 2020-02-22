import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Referance } from './Referance';
import { ResumeBucket } from "../../../../resume.service";
@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.css']
})
export class ReferancesComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.flag && this.resumeService.checklenthOfarray(this.resumeService._resume.referances)) {
      this.resumeService._resume.referances.push(new Referance())
    }
  }

  constructor(private resumeService: ResumeBucket) { }

  public Editor = ClassicEditor;
  @Input() flag: boolean;
  selected = 0;

  __referances: any;


  ngOnInit() {

  }


  addNewReferance() {
    this.__referances.push(new Referance())
  }

  selectedItem(i) {
    this.selected = i;

  }
  removeRefernace() {
  }
}
