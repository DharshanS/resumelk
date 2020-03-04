





import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

export class ResumeService {
  apiUrl = "http://44.229.50.57:8081/resumeservice/api/v1/resume";
  resumeObject: any;
  userCode = 8;
  constructor(private http: HttpClient) { }
  _resume =
    {
      "personal": null,
      "workExperiance": [],
      "education": [],
      "skills": [],
      "achivements": [],
      "referances": [],
      "awards": [],
      "certificates": [],
      "publications": [],
      "Volunteerings": [],
      "bobbies": [],
      "socialMedia": [],
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

  loadResume() {
    this.http.get(`${this.apiUrl}?userCode=${this.userCode}`, { withCredentials: true }).subscribe(data => {
      this.resumeObject = data[0];
    })
  }

  updateTemplate(resume) {
    console.log(this.resumeObject)
    this.resumeObject.resumeName = resume;
    this.http.put(this.apiUrl, this.resumeObject, { withCredentials: true }).subscribe(data => {
      console.log("response");
      this.loadResume();
    });
  }


  async updateResume(resume) {

    resume.userCode = 8;
    resume.userName = "Dharshan";
    resume.resumeId = '5e4be10d2ab79c00013c086f'
    this.http.put(this.apiUrl, resume, { withCredentials: true }).subscribe(data => {
      console.log("response");
      console.log(data);
    });
  }

  getResume(code) {
    return this.http.get(`${this.apiUrl}?userCode=${code}`, { withCredentials: true });
  }

}
