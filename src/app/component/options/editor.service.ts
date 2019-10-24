import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {



  moreSections=[
    {"id":1,"label":"Personal Info","flag":true,"class":"fa-user","name":"personal","icon":"fa-lock"},
    {"id":2,"label":"Work Experience","flag":false,"class":"fa-suitcase","name":"experience","icon":"fa-times"},
  {"id":3,"label":"Eductions","flag":false,"class":"fa-graduation-cap","name":"education","icon":"fa-times"},
  {"id":4,"label":"Skills","flag":false,"class":"fa-chart-bar","name":"skill","icon":"fa-times"},
  {"id":5,"label":"Certificates Info","flag":false,"name":"certificates","class":"fa-certificate","icon":"fa-times"},
  {"id":6,"label":"Awards","flag":false,"class":"fa-award","icon":"fa-times","name":"award"},
  {"id":7,"label":"References","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"referance"},
  {"id":8,"label":"Achievements","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"achievements"},
  {"id":9,"label":"Publications","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"publications"},
  {"id":10,"label":"Text","flag":true,"class":"fa-suitcase ","icon":"fa-times","name":"text"},
  {"id":11,"label":"strengths","flag":false,"class":"fa-suitcase ","icon":"fa-times","name":"strengths"},

  {"id":12,"label":"Custom","flag":true,"class":"fa-suitcase ","icon":"fa-times","name":"custom" ,"title":"Title"}
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



  constructor() { }
}
