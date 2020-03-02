import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private resume:ResumeService,private router: Router) { }

  ngOnInit() {
  }

  previewTemplates(){

    console.log(this.resume._currentTemplate)
    this.router.navigate(['/preview/'+this.resume._currentTemplate]);


  }

}
