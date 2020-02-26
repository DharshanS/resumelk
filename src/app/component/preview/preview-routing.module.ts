import { NgModule, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SunComponent } from "./templates/sun/sun.component";
import { EinsteinComponent } from "./templates/einstein/einstein.component";
import { MoonComponent } from "./templates/moon/moon.component";
import { PreviewComponent } from "./preview.component";
import { NewtonComponent } from './templates/newton/newton.component';
import { HawkingComponent } from './templates/hawking/hawking.component';
import { CaliforniSmallComponent } from './templates/californi-small/californi-small.component';
import { ModernComponent } from './templates/modern/modern.component';
import { ParisComponent } from './templates/paris/paris.component';
import { ProfessionalComponent } from './templates/professional/professional.component';

const optionsRoute: Routes = [
  {
    path: "",
    component: PreviewComponent,

    children: [
      {
        path: "template-sun",
        component: SunComponent

      },
      {
        path: "darwin",
        component: MoonComponent

      },
      {
        path: "einstein",
        component: EinsteinComponent

      },
      {
        path: "newton",
        component: NewtonComponent

      },
      {
        path: "hawking",
        component: HawkingComponent

      },
      {
        path:'californiSmall',
        component:CaliforniSmallComponent
      },
    
      {
        path:'paris',
        component:ParisComponent
      },
      {
        path:'modern',
        component:ModernComponent
      },
      {
        path:'professional',
        component:ProfessionalComponent
      }


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(optionsRoute)],
  exports: [RouterModule]
})
export class PreviewRoutingModule {

  OnInit(){
    console.log('OnInit.........')
  }

}
