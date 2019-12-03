import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule, Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';

import { OptionRoutingModule } from './options-routing.module';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { EditorComponent } from './editor/editor.component';

import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import {MaterialModule} from './material.module';
import { ScrollEventModule } from 'ngx-scroll-event';
import { PersonalComponent } from './section/personal/personal.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { EducationComponent } from './section/education/education.component';
import { SkillComponent } from './section/skill/skill.component';
import { CertificateComponent } from './section/certificate/certificate.component';
import { PublicationComponent } from './section/publication/publication.component';
import { AwardComponent } from './section/award/award.component';
import { AchievementsComponent } from './section/achievements/achievements.component';
import { CustomComponent } from './section/custom/custom.component';
import { ListComponent } from './list/list.component';
import { EditorService } from './editor.service';

import { TextComponent } from './section/text/text.component';
import { ReferancesComponent } from './section/referances/referances.component';
import { VolunteeringComponent } from './section/volunteering/volunteering.component';
import { HobbiesComponent } from './section/hobbies/hobbies.component';
import { GaphsComponent } from './section/gaphs/gaphs.component';
import { StrengthsComponent } from './section/strengths/strengths.component';
import { SocialMediaComponent } from './section/social-media/social-media.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {
  MatInputModule, MatButtonModule, MatSelectModule, MatIconModule
  , MatNativeDateModule,MatDatepickerModule,MatFormFieldModule
} from '@angular/material';







import { DynamicComponentsService } from './dynamic-components.service';


@NgModule({
  declarations: [

    MainComponent,
    EditorComponent,
    PersonalComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    CertificateComponent,
    PublicationComponent,
    AwardComponent,
    AchievementsComponent,
    CustomComponent,
    ListComponent,
    TextComponent,
    ReferancesComponent,
    VolunteeringComponent,
    HobbiesComponent,
    GaphsComponent,
    StrengthsComponent,
    SocialMediaComponent,
    HeaderComponent



  ],
  imports: [
    MatIconModule,
    ScrollEventModule,
    CommonModule,
    OptionRoutingModule,
  //  BrowserModule,
    //   ReactiveFormsModule,
    FormsModule,
    //  BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,

    NgSelectModule,
    CKEditorModule,


  ],

  //exports:[MatDatepickerModule],

  entryComponents: [CustomComponent, TextComponent],
  providers: [EditorService, DynamicComponentsService, MatDatepickerModule],

})
export class OptionsModule { }
