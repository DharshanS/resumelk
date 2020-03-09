import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-nikola-tesla',
  templateUrl: './nikola-tesla.component.html',
  styleUrls: ['./nikola-tesla.component.scss']
})
export class NikolaTeslaComponent implements OnInit {

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
  }

}
