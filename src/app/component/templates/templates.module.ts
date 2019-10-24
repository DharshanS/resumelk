import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TempOneComponent} from './temp-one/temp-one.component';
import {TemplatesComponent} from './wrapper/templates.component';
import { TemplateRoutingModule } from './template-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [TempOneComponent,TemplatesComponent,HeaderComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,

    MDBBootstrapModule.forRoot(),
    TemplateRoutingModule
  ]
})
export class TemplatesModule { }
