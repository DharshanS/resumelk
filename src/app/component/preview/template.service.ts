import { Injectable } from '@angular/core';
import { PageComponent } from './templates/page-component';
import { ResumePage } from './templates/resume-page/resume-page.component';


@Injectable()
export class AddCpmponentService {
  getPageComponents() {
    return [
      new PageComponent(ResumePage, {
        name: '<div class="main-page secondPageEes"></div> <div class="tm-row">One</div><div class="col-12"></div> </div> </div>', bio: 'Brave as they come'
      }),
      new PageComponent(ResumePage, { name: '<div class="main-page secondPageEes"></div> <div class="tm-row">Two</div><div class="col-12"></div> </div> </div>', bio: 'Brave as they come' })
    ];
  }
}
