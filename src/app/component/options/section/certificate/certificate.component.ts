import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  @Input() flag:boolean;
  public Editor = ClassicEditor;

certificates=[];
selected=0;
  constructor() { }

  ngOnInit() {
    this.certificates=[{"certificateName":" certificate #","authority":"","certicateCode":"","dateOfCerticate":{"month":"","year":""}}]
  }


  addNewCertificate(){
    this.certificates.push({"certificateName":"certificate #","authority":"","certicateCode":"","dateOfCerticate":{"month":"","year":""}})

  }
  removeCertificate(index){

    if(index!==0)
    this.certificates.splice(index,1);

  }

  selectedItem(i){
    this.selected=i;
  }

}
