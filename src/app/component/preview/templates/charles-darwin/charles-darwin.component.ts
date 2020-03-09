import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';

@Component({
  selector: 'app-miami',
  templateUrl: './charles-darwin.component.html',
  styleUrls: ['./charles-darwin.component.scss']
})
export class CharlesDarwinComponent implements OnInit {

  constructor(public resumeService: ResumeService) { }

  ngOnInit() {
  }

}
