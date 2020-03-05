import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-amsterdam',
  templateUrl: './amsterdam.component.html',
  styleUrls: ['./amsterdam.component.scss']
})
export class AmsterdamComponent implements OnInit {

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
  }

}
