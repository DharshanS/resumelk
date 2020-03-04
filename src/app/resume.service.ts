





import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

export class ResumeBucket {
  apiUrl="http://44.229.50.57:8081/resumeservice/api/v1/resume";
  resumeObject:any;
  constructor(private http: HttpClient) { }
  _resume =
    {
      "personal":null,
      "workExperiance": [],
      "education": [],
      "skills": [],
      "achivements": [],
      "referances": [],
      "awards": [],
      "certificates": [],
      "publications": [],
      "Volunteerings": [{
        "institutaionName": "IDM", "role": "Manager",
        "country": "SriLanka", "city": "Kandy", "timePeriod": { "from": { "month": "JUNE", "year": "1987" }, "to": { "month": "JUNE", "year": "1997" } }
      }],
      "bobbies": [
        { "name": "Football", "description": "" }
      ],
      "socialMedia": [
        {
          "link": "http://facebook.com",
          "description": "facebook"
        },
        {
          "link": "https://twitter.com/",
          "description": "twitter"
        },
        {
          "link": "",
          "description": ""
        }
      ],

      "strengths": []
    }
  _currentTemplate = "";
  _templateNames = [
    {
      "name": "einstein",
      "id": 1,

    },
    {
      "name": "newton",
      "id": 2,

    },
    {
      "name": "hawking",
      "id": 3,

    },
    {
      "name": "darwin",
      "id": 4,

    }, {
      "name": "curie",
      "id": 5,

    },
    {
      "name": "aristotle",
      "id": 6
    },
    {
      "name": "californiSmall",
      "id": 7
    },
    {
      "name": "modern",
      "id": 8
    },
    {
      "name": "paris",
      "id": 9
    },
    {
      "name": "professional",
      "id": 10
    },
      {
      "name": "amsterdam",
      "id": 11
    },
    {
      "name": "isaac-newton",
      "id": 12
    },
    {
      "name": "barcelona",
      "id": 13
    },
    {
      "name": "boxed-navy",
      "id": 14
    },
    {
      "name": "global-citizen-green",
      "id": 15
    },
    {
      "name": "miani",
      "id": 16
    },
    {
      "name": "royal-blue",
      "id": 17
    },
    {
      "name": "trendy-design",
      "id": 18
    },
    {
      "name": "uniform-brown",
      "id": 19
    }

  ]
  A4_SIZE = 800;



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


  checklenthOfarray(data: any[]) {
    if (data.length == 0) {
      console.log("Data Nulll")
      return true;
    }
    return false;
  }

  loadResume(code){
    this.http.get(`${this.apiUrl}?userCode=${code}`,{withCredentials:true}).subscribe(data=>{
      this.resumeObject=data[0];
      this._currentTemplate=data[0].resumeName;
    })
  }

  updateTemplate(resume){
    console.log(this.resumeObject)
    this.resumeObject.resumeName="isaac-newton";
       this.http.put(this.apiUrl,this.resumeObject,{withCredentials:true}).subscribe(data=>{
         console.log("response");
         console.log(data);
          this.loadResume(8);
       });
  }
}


