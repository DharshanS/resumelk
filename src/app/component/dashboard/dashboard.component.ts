import { HostListener, Component, OnInit, Inject } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {

    if (this.isUserLoggedIn) {
      this.resumeService.loadResumeComponentsJson();
    } else {
      console.log("User not created account yet");
      this.resumeService.createGuestResume()
    }

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

  }



}
