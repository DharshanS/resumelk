import { Component, OnInit,AfterViewInit ,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit,AfterViewInit {

 
  constructor(private router: Router) { }
  

  ngOnInit() {
    console.log("---Inside ngOnInit---");
  }
  ngDoCheck() {
    console.log("---Inside ngDoCheck---");
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {
    console.log("---Inside ngAfterViewInit---");
  }
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");
  }


  navigateToEditor(){

  }

 
}
