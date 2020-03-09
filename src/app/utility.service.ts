
import { ResumeService } from './resume.service';
export class UtilityService {
  constructor(private resumeService: ResumeService) {
  }
  //cheak the lenth of resume mobjects
  isLengthOfZero(data: any[]): boolean {
    if (data.length > 0) return false;
    return true;
  }

  templatePageBreak(element: any, pageClass: string): boolean {
    let _pageFlag;
    let arraylist = element.nativeElement.querySelectorAll('.componentSection');
    let calculateSectionSize = 0;
    for (let i = 0; i < arraylist.length; i++) {
      console.log(arraylist[i].offsetHeight);
      calculateSectionSize = calculateSectionSize + (arraylist[i].offsetHeight * this.resumeService.A4_SIZE_CM);
      _pageFlag = this.isPageSizeMoreThanOnePage(calculateSectionSize, element, i, pageClass);
    }
    return _pageFlag;
  }

  private isPageSizeMoreThanOnePage(section: number, element: any, i: number, pageClass: string) {
    let _pageFlag = false;
    let a4Size = this.resumeService.A4_SIZE;
    console.log("Section : " + section + ":" + a4Size)
    if (a4Size < section) {
      let sectionElement = element.nativeElement.querySelectorAll('.componentSection')[i];
      _pageFlag = true;
      this.moveParentElementAsChildElement(element, sectionElement, pageClass);
    }
    return _pageFlag;
  }

  private moveParentElementAsChildElement(element: any, sectionElement: any, pageClass: string) {
    setTimeout(() => {
      if (typeof (element) !== 'undefined') {
        element.nativeElement.querySelector("." + pageClass).appendChild(sectionElement);
      }
    }, 1000);
  }

  isObjectIsNotNull(resumeObject: object) {
    if (resumeObject != null) {
      return true;
    }
    return false;
  }

}
