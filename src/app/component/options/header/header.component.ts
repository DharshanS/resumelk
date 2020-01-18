import { Component, OnInit } from '@angular/core';
import { ResumeBucket } from 'src/app/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private resume:ResumeBucket,private router: Router) { }

  ngOnInit() {
  }


  routeToPreview(){
    alert('test...'+this.resume._currentTemplate);
    this.router.navigate(['/preview/'+this.resume._currentTemplate]);
   // this.router.navigate(['/PreviewComponent/'+ this.resume._currentTemplate]);


  }

}
