import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-referances',
  templateUrl: './referances.component.html',
  styleUrls: ['./referances.component.css']
})
export class ReferancesComponent implements OnInit {

  constructor() { }

  public Editor = ClassicEditor;
  @Input() flag:boolean;
  selected=0;


  __referances=[{"company":"","personName":"","contact1":"","contact2":"","description":""}];

  ngOnInit() {
    //this.__referances.push(this._referance);
  }


  addNewReferance(){

    this.__referances.push({"company":"","personName":"","contact1":"","contact2":"","description":""})
  }

  selectedItem(i){
   // alert(i);
    this.selected=i;

  }
}
