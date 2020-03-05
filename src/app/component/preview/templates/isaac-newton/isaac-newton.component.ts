import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-athens',
  templateUrl: './isaac-newton.component.html',
  styleUrls: ['./isaac-newton.component.scss']
})
export class IsaacNewtonComponent implements OnInit {

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
  }

}
