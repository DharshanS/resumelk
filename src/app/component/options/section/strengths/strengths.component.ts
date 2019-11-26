import { Component, OnInit, Input } from '@angular/core';
//import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {


  @Input() flag:boolean;

  users = [
    {id: 1, name: 'Ability to learn from mistakes'},
    {id: 2, name: 'Ability to prioritize'},
    {id: 3, name: 'Accuracy'}
];



addStrengths = (term) => ({id: term, name: term});

  constructor() { }



  ngOnInit() {
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }
}
