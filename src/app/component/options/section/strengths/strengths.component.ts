import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {

  strengthBucket = [];
  @Input() flag: boolean;
  strengthInput: string;
  addStrengths = (term) => ({ id: term, name: term });
  constructor(public resumeService: ResumeService) { }

  myControl = new FormControl();
  options: string[] = ['Ability to learn from mistakes', 'Ability to prioritize', 'Accuracy'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    setTimeout(() => {
      console.log(this.resumeService.resumeComponents.strengths)
      this.strengthBucket = this.resumeService.resumeComponents.strengths;
    }, 500)

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  pushStrength(e: any) {
    this.strengthBucket.push(e);
    this.resumeService.resumeComponents.strengths = this.strengthBucket;
  }
  removeStrength(index: number) {
    if (index !== -1) {
      this.strengthBucket.splice(index, 1);
    }

  }
}
