
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


@NgModule({
  declarations: [
    SunComponent,
    EinsteinComponent,
    MoonComponent,
    PreviewComponent,
    NewtonComponent,
    HawkingComponent
  ],
  imports: [
    PreviewRoutingModule,
    CommonModule
  ],

})
export class PreviewModule { }
