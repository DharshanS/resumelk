import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private resumeService: ResumeService, private router: Router) {
  }
  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }
  routeToPreview() {
    this.router.navigate(['/preview/' + this.resumeService.resumeObject['resumeName']]);
  }

}
