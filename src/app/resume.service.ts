





import { HttpClient } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

export class ResumeBucket{

  constructor (private http: HttpClient){}
  _resume=
  {
    "personal":{
        "title":"Mr",
        "firstName":"Dharshan",
        "lastName":"Dharshan",
        "dateOfBirth":"1986-04-02",
        "nationality":"SriLankan",
        "phoneNumber":"081-2219393",
        "mobileNumber":"0770885997",
        "email":"cdharshans@gmail.com",
        "web":"https://stg.miracleofasia.com",
        "git":"github.com/dharshan@sitha",
        "address":{
            "street":"No 159/1 Dambawela Road",
            "city":"Kandy",
            "postalCode":"20000",
            "country":"Sri Lanka"

        },
        "description":"Enterprising marketing professional skilled at marketing, communications, branding, campaign management, and campaign analysis. Over a career of 2+ years, gained exposure to and executed multiple marketing initiatives. Adept at launching marketing campaigns resulting in significant sales and user acquisition. Skilled at analysing & improving the performance of campaigns through data analysis and competitive benchmarking."


    },
    "workExperiance":[],

    "education":[

    ],

    "skills":[]
      ,

      "achivements":[
          {
            "name":"Played Base Ball in the Sri Lanka National side ",
            "description":"One of the most difficult parts in writing a resume is composing the descriptions of your jobs, volunteer work, projects, and other relevant experiences. Each description of your work history and volunteer experience should be clear and concise, yet descriptive. After reading your description, a prospective employer should know exactly what your responsibilities were, what skills you have developed, where your strengths lie, and what you have achieved."
          }
        ],

        "referances":[


        ],


        "awards":[]
,

        "certificates":[],

        "publications":[]
,
        "Volunteerings":[{"institutaionName":"IDM","role":"Manager",
          "country":"SriLanka","city":"Kandy","timePeriod":{"from":{"month":"JUNE","year":"1987"},"to":{"month":"JUNE","year":"1997"}}}]
          ,

          "bobbies":[
            {"name":"Football","description":""}
          ],

          "socialMedia":[
            {
            "link":"http://facebook.com",
            "description":"facebook"
          },
          {
            "link":"https://twitter.com/",
            "description":"twitter"
          },
          {
            "link":"",
            "description":""
          }
        ],

        "strengths":[{"name":"Programming Skills","description":"Java,PHP,Vue,Anguler"}]






}
_currentTemplate="";
_templateNames=[
  {
    "name":"einstein",
    "id":1,

  },
  {
    "name":"newton",
    "id":2,

  },
  {
    "name":"hawking",
    "id":3,

  },
  {
    "name":"darwin",
    "id":4,

  },  {
    "name":"curie",
    "id":5,

  },
  {
    "name":"aristotle",
    "id":6
  }

]
A4_SIZE=800;



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}


checklenthOfarray(data:any[]){
if(data.length==0){
  console.log("Data Nulll")
return true;
}
return false;
}

}
