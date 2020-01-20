import {HostListener, Component, OnInit,Inject } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { WINDOW } from "../../window.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
onWindowScroll() {
 alert('test')
}

}
