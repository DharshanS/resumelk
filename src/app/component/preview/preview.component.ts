import { Component, OnInit, } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private router: Router ) {

//  console.log(this.router.url);
//  this.router.navigate(['/edit/james']);
   }

  ngOnInit() {
  }




}
