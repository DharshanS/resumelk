





import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';


export class UtilityService {

  //cheak the lenth of resume mobjects
  isLengthOfZero(data: any[]): boolean {
    if (data.length > 0) return false;
    return true;
  }
}
