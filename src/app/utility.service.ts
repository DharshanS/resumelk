
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
      _pageFlag = _pageFlag != true ? this.isPageSizeMoreThanOnePage(calculateSectionSize, element, i, pageClass, _pageFlag) : true;
      if (_pageFlag) {
        calculateSectionSize = 0;
        this.moveParentElementAsChildElement(element, arraylist[i], pageClass);
      }
    }

    console.log("einsteinPage2" + _pageFlag)
    return _pageFlag;
  }

  private isPageSizeMoreThanOnePage(componentSectionTotalHight: number, element: any, i: number, pageClass: string, _pageFlag: boolean) {
    let a4Size = this.resumeService.A4_SIZE;
    console.log("Section : " + componentSectionTotalHight + ":" + a4Size)
    if (a4Size < componentSectionTotalHight) {
      let sectionElement = element.nativeElement.querySelectorAll('.componentSection')[i];
      _pageFlag = true;
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


  pageElementsHTML(element: any) {
    let arraylist = element.nativeElement.querySelectorAll('.componentSection');
    let calculateSectionSize = 0;
    let nodeSet = [];
    let isFirstPage = true;
    var node = document.createElement("div");

    for (let i = 0; i < arraylist.length; i++) {
      calculateSectionSize = calculateSectionSize + (arraylist[i].offsetHeight * this.resumeService.A4_SIZE_CM);

      calculateSectionSize = calculateSectionSize + (arraylist[i].offsetHeight * this.resumeService.A4_SIZE_CM);
      if (this.resumeService.A4_SIZE < calculateSectionSize && !isFirstPage) {
        if (this.resumeService.A4_SIZE < calculateSectionSize) {
          node.appendChild(arraylist[i]);
        } else {
          calculateSectionSize = 0;
          nodeSet.push(node);
          node = document.createElement("div");
          node.appendChild(arraylist[i]);
        }

      } else {
        if (this.resumeService.A4_SIZE < calculateSectionSize) {
          isFirstPage = false;
        }

      }





    }
    return nodeSet;
  }

}
