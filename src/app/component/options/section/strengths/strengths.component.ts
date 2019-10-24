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
    {id: 'anjmao', name: 'Anjmao'},
    {id: 'varnas', name: 'Tadeus Varnas'}
];



addCustomUser = (term) => ({id: term, name: term});

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
