import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Referance } from './Referance';
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

  __referances:any;


  ngOnInit() {
    this.__referances=[new Referance()];
    //this.__referances.push(this._referance);
  }


  addNewReferance(){

    this.__referances.push(new Referance())
  }

  selectedItem(i){
   // alert(i);
    this.selected=i;

  }
}
