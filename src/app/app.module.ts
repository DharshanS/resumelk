import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { HeaderComponent } from "./component/header/header.component";
import { TemplatesComponent } from "./component/templates/templates.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { ResumeBucket } from "./resume.service";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';
import { EditorService } from './component/options/editor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    TemplatesComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,

    CKEditorModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],

  providers: [ResumeBucket,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
