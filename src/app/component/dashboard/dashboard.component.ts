import { HostListener, Component, OnInit, Inject } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.loadResumeComponentsJson();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

  }

}
