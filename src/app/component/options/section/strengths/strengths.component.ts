import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ResumeBucket } from 'src/app/resume.service';
//import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {

  stremgArray=[];
  stremg;
  @Input() flag:boolean;

  users = [
    {id: 1, name: 'Ability to learn from mistakes'},
    {id: 2, name: 'Ability to prioritize'},
    {id: 3, name: 'Accuracy'}
];



addStrengths = (term) => ({id: term, name: term});

  constructor(public resume:ResumeBucket) { }


  myControl = new FormControl();
  options: string[] = ['Ability to learn from mistakes', 'Ability to prioritize', 'Accuracy'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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

  pushData(e){
    this.stremgArray.push(e);
    console.log("stremgArray",this.stremgArray);
  }
  remove(index){


    if (index !== -1) {
      this.stremgArray.splice(index, 1);
  }
  }
}
