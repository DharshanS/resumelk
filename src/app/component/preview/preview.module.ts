
import {
  NgModule
} from '@angular/core';
import { SunComponent } from './templates/sun/sun.component';
import { EinsteinComponent } from './templates/einstein/einstein.component';
import { MoonComponent } from './templates/moon/moon.component';
import { PreviewRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    SunComponent,
    EinsteinComponent,
    MoonComponent,
    PreviewComponent
  ],
  imports: [
    ColorPickerModule,
    PreviewRoutingModule,
    CommonModule
  ],

})
export class PreviewModule { }
