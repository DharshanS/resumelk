





import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';


export class ResumeService {
  apiUrl = "http://44.229.50.57:8081/resumeservice/api/v1/resume";
  resumeObject: any;
  userCode = 8;
  constructor(private http: HttpClient) {

  }
  resumeComponents =
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
    },
    {
      "name": "galileo-galilei",
      "id": 7
    },
    {
      "name": "leonardo-da-vinci",
      "id": 8
    },
    {
      "name": "nikola-tesla",
      "id": 9
    },
    {
      "name": "alexander-graham-bell",
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
      "name": "thomas-edison",
      "id": 13
    },
    {
      "name": "stephen-hawking",
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
  A4_SIZE = 29.7;
  A4_SIZE_CM = 0.02645833;



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



  loadResumeComponentsJson() {
    this.http.get(`${this.apiUrl}?userCode=${this.userCode}`, { withCredentials: true }).subscribe(data => {
      this.resumeComponents = data[0]['resumeJson'];
      this.resumeObject = data[0];
    })
  }
  syncronusTemplateJsonLoad() {
    return this.http.get(`${this.apiUrl}?userCode=${this.userCode}`, { withCredentials: true });
  }

  updateTemplate(resume) {
    this.resumeObject.resumeName = resume;
    this.http.put(this.apiUrl, this.resumeObject, { withCredentials: true }).subscribe(data => {
      console.log("response");
      this.loadResumeComponentsJson();
    });
  }


  async updateResume() {
    this.resumeObject.userCode = 8;
    this.resumeObject.userName = "Dharshan";
    this.resumeObject.resumeId = '5e4be10d2ab79c00013c086f'
    this.http.put(this.apiUrl, this.resumeObject, { withCredentials: true }).subscribe(data => {
      this.loadResumeComponentsJson();
    });
  }

  getResume(code) {
    return this.http.get(`${this.apiUrl}?userCode=${code}`, { withCredentials: true });
  }

  getTemplateJson() {
    return this.syncronusTemplateJsonLoad().subscribe(data => {
      return data[0]["resumeJson"];
    })

  }
}
