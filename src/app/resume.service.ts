





import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

export class ResumeService {
  apiUrl = "https://resume.lk/resumeservice/api/v1/resume";
  GUEST_URL = "https://resume.lk/resumeservice/api/v1/guests-resumes";
  //http://44.229.50.57:8081/resumeservice/api/v1/resume
  //https://resume.lk/resumeservice/api/v1/resume

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

    },

    {
      "name": "galileo-galilei",
      "id": 5
    },
    {
      "name": "leonardo-da-vinci",
      "id": 6
    },
    {
      "name": "nikola-tesla",
      "id": 7
    },
    {
      "name": "alexander-graham-bell",
      "id": 8
    },
    {
      "name": "amsterdam",
      "id": 9
    },
    {
      "name": "isaac-newton",
      "id": 10
    },
    {
      "name": "thomas-edison",
      "id": 11
    },
    {
      "name": "stephen-hawking",
      "id": 12
    },
    {
      "name": "global-citizen-green",
      "id": 13
    }
    // {
    //   "name": "markoni",
    //   "id": 14
    // }

  ]
  A4_SIZE = 20.7;
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
      //   this.loadResumeComponentsJson();
    });
  }

  getResume(code: string) {
    return this.http.get(`${this.apiUrl}?userCode=${code}`, { withCredentials: true });
  }

  getTemplateJson() {
    return this.syncronusTemplateJsonLoad().subscribe(data => {
      return data[0]["resumeJson"];
    })

  }

  profileImagePost(file: File) {
    let url = 'https://resume.lk/resumeservice/api/v1/images/files';
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData, { withCredentials: true });
  }



  createGuestResume() {
    console.log("Guest initiating....");
    return this.http.get(`${this.GUEST_URL}`, { withCredentials: true }).subscribe(d => {
      console.log(d)
    });
    //return this.http.get(`${this.GUEST_URL}`, { withCredentials: true });
  }

  async updateGuestResume() {
    this.http.put(this.GUEST_URL, this.resumeObject, { withCredentials: true }).subscribe(data => {

    });
  }

}
