
import { ResumeService } from './resume.service';
export class UtilityService {
  constructor(private resumeService: ResumeService) {
  }
  //cheak the lenth of resume mobjects
  isLengthOfZero(data: any[]): boolean {
    if (data.length > 0) return false;
    return true;
  }

  templatePageBreak(element: any, _pageFlag: boolean): boolean {
    console.log(element);
    let arraylist = element.nativeElement.querySelectorAll('.section');
    let calculateSectionSize = 0;
    for (let i = 0; i < arraylist.length; i++) {
      calculateSectionSize += arraylist[i].offsetHeight * this.resumeService.A4_SIZE_CM;
      _pageFlag = this.isPageSizeMoreThanOnePage(calculateSectionSize, element, i, _pageFlag);
    }
    return _pageFlag;
  }

  private isPageSizeMoreThanOnePage(section: number, element: any, i: number, _pageFlag: boolean) {
    if (this.resumeService.A4_SIZE < section) {
      let sectionElement = element.nativeElement.querySelectorAll('.section')[i];
      _pageFlag = true;
      this.moveParentElementAsChildElement(element, sectionElement);
    }
    return _pageFlag;
  }

  private moveParentElementAsChildElement(element: any, sectionElement: any) {
    setTimeout(() => {
      if (typeof (element) !== 'undefined') {
        element.nativeElement.querySelector('.page2').appendChild(sectionElement);
      }
    }, 1000);
  }

  // isObjectIsNotNull(resumeObject: object) {
  //   if (resumeObject != null) {
  //     return true;
  //   }
  //   return false;
  // }

}
