
import {
  NgModule
} from '@angular/core';
import { SunComponent } from './templates/sun/sun.component';
import { EinsteinComponent } from './templates/einstein/einstein.component';

import { PreviewRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { CommonModule } from "@angular/common";
import { NewtonComponent } from './templates/newton/newton.component';
import { HawkingComponent } from './templates/hawking/hawking.component';
import { EditorService } from './../options/editor.service';
import { ParisComponent } from './templates/paris/paris.component';
import { AmsterdamComponent } from './templates/amsterdam/amsterdam.component';
import { RoyalBlueComponent } from './templates/royal-blue/royal-blue.component';
import { TrendyDesignComponent } from './templates/trendy-design/trendy-design.component';
import { UniformBrownComponent } from './templates/uniform-brown/uniform-brown.component';
import { IsaacNewtonComponent } from './templates/isaac-newton/isaac-newton.component';
import { CharlesDarwinComponent } from './templates/charles-darwin/charles-darwin.component';
import { StephenHawkingComponent } from './templates/stephen-hawking/stephen-hawking.component';
import { NikolaTeslaComponent } from './templates/nikola-tesla/nikola-tesla.component';
import { ThomasEdisonComponent } from './templates/thomas-edison/thomas-edison.component';
import { GalileoGalileiComponent } from './templates/galileo-galilei/galileo-galilei.component';
import { LeonardoDaVinciComponent } from './templates/leonardo-da-vinci/leonardo-da-vinci.component';
import { AlexanderGrahamBell } from './templates/alexander-graham-bell/alexander-graham-bell.component';
import { DarwinComponent } from './templates/darwin/darwin.component';
import { ResumePage } from './templates/resume-page/resume-page.component';
import { AddCpmponentService } from './template.service';
import { ResumeDirective } from './templates/page.directive';
import { MarkoniComponent } from './templates/markoni/markoni.component';
import { GlobalCitizenGreenComponent } from './templates/global-citizen-green/global-citizen-green.component';

@NgModule({
  declarations: [
    SunComponent,
    EinsteinComponent,
    DarwinComponent,
    PreviewComponent,
    NewtonComponent,
    HawkingComponent,
    ParisComponent,
    GalileoGalileiComponent,
    AlexanderGrahamBell,
    LeonardoDaVinciComponent,
    AmsterdamComponent,
    IsaacNewtonComponent,
    NikolaTeslaComponent,
    StephenHawkingComponent,
    ThomasEdisonComponent,
    CharlesDarwinComponent,
    RoyalBlueComponent,
    TrendyDesignComponent,
    UniformBrownComponent,
    ResumePage,
    ResumeDirective,
    MarkoniComponent,
    GlobalCitizenGreenComponent

  ],
  imports: [
    PreviewRoutingModule,
    CommonModule
  ],
  entryComponents: [ResumePage],
  providers: [EditorService, AddCpmponentService]
})
export class PreviewModule { }
