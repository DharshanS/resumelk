import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {



  moreSections=[
  {"id":1,"label":"Personal Info","flag":true,"class":"fa-user","name":"personal","icon":"fa-lock","active":true},
  {"id":2,"label":"Work Experience","flag":false,"class":"fa-suitcase","name":"experience","icon":"fa-times","active":false},
  {"id":3,"label":"Eductions","flag":false,"class":"fa-graduation-cap","name":"education","icon":"fa-times","active":false},
  {"id":4,"label":"Skills","flag":false,"class":"fa-chart-bar","name":"skill","icon":"fa-times","active":false},
  {"id":5,"label":"Certificates Info","flag":false,"name":"certificates","class":"fa-certificate","icon":"fa-times","active":false},
  {"id":6,"label":"Awards","flag":false,"class":"fa-award","icon":"fa-times","name":"award","active":false},
  {"id":7,"label":"References","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"referance","active":false},
  {"id":8,"label":"Achievements","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"achievements","active":false},
  {"id":9,"label":"Publications","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"publications","active":false},
  {"id":10,"label":"Text","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"text","active":false},
  {"id":11,"label":"strengths","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"strengths","active":false},

  {"id":12,"label":"Custom","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"custom" ,"title":"Title","active":false}
];

 work_experience= {
    "companyName":"Experinace #",
    "jobTitle":"",
    "country":"",
    "city":"",
    "timePeriod":{
      "from":{
        "month":"",
        "year":""
      },
      "to":{
        "month":"",
        "year":""
      }
    },
    "currentWork":false,
    "descrption":""




  }

  getWorkExperianceObject(){
    return this.work_experience;
  }

  //All the editor inputs bind to this object and convert to choosen template

  constructor() { }
}
