import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[resumeDirective]',
})
export class ResumeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

