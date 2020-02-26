
import {
  NgModule
} from '@angular/core';
import { SunComponent } from './templates/sun/sun.component';
import { EinsteinComponent } from './templates/einstein/einstein.component';
import { MoonComponent } from './templates/moon/moon.component';
import { PreviewRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { CommonModule } from "@angular/common";
import { NewtonComponent } from './templates/newton/newton.component';
import { HawkingComponent } from './templates/hawking/hawking.component';
import { EditorService } from './../options/editor.service';
import { ParisComponent } from './templates/paris/paris.component';
import { CaliforniSmallComponent } from './templates/californi-small/californi-small.component';
import { ProfessionalComponent } from './templates/professional/professional.component';
import { ModernComponent } from './templates/modern/modern.component';

@NgModule({
  declarations: [
    SunComponent,
    EinsteinComponent,
    MoonComponent,
    PreviewComponent,
    NewtonComponent,
    HawkingComponent,
    ParisComponent,
    CaliforniSmallComponent,
    ProfessionalComponent,
    ModernComponent
  ],
  imports: [
    PreviewRoutingModule,
    CommonModule
  ],
  providers: [EditorService]
})
export class PreviewModule { }
