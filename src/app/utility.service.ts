
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
      calculateSectionSize = calculateSectionSize + (arraylist[i].offsetHeight * this.resumeService.A4_SIZE_CM);
      console.log(calculateSectionSize);
      _pageFlag = this.isPageSizeMoreThanOnePage(calculateSectionSize, element, i, pageClass);
      if (_pageFlag) {
        calculateSectionSize = 0;
      }
    }

    console.log("einsteinPage2" + _pageFlag)
    return _pageFlag;
  }

  private isPageSizeMoreThanOnePage(componentSectionTotalHight: number, element: any, i: number, pageClass: string) {
    let _pageFlag = false;
    let a4Size = this.resumeService.A4_SIZE;
    console.log("Section : " + componentSectionTotalHight + ":" + a4Size)
    if (a4Size < componentSectionTotalHight) {
      let sectionElement = element.nativeElement.querySelectorAll('.componentSection')[i];
      _pageFlag = true;
      this.moveParentElementAsChildElement(element, sectionElement, pageClass);
    }
    console.log("Page " + _pageFlag)
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
