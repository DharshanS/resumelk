import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
// import { TemplatesComponent } from './component/templates/wrapper/templates.component';
import { PreviewComponent } from './component/preview/preview.component';
import { FooterComponent } from './component/footer/footer.component';
import { TempOneComponent } from './component/preview/templates/temp-one/temp-one.component';
import { HttpClientModule } from '@angular/common/http'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ResumeInformation } from "./resumeInfomation.service";



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    // TemplatesComponent,
    PreviewComponent,
    FooterComponent,
    TempOneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    MDBBootstrapModule,

    MDBBootstrapModule.forRoot()
  ],
  providers: [ResumeInformation],
  bootstrap: [AppComponent]
})
export class AppModule { }
