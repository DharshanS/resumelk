import { Component, OnInit,Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CustomRoof } from '../customRoof';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() flag:boolean;
  public Editor = ClassicEditor;
  constructor() { }

  _ref:any;


  @Input() message;
  @Input() title:string;
  isEditable=false;

  ngOnInit() {
  }


  destroyComponent() {
    this._ref.destroy();

}

changeEditor(){
  if(this.isEditable){
    this.isEditable=false;
  }else{
    this.isEditable=true;
  }
}


}
