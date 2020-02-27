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
import { AmsterdamComponent } from './templates/amsterdam/amsterdam.component';
import { AthensComponent } from './templates/athens/athens.component';
import { BarcelonaComponent } from './templates/barcelona/barcelona.component';
import { BoxedNavyComponent } from './templates/boxed-navy/boxed-navy.component';
import { GlobalCitizenGreenComponent } from './templates/global-citizen-green/global-citizen-green.component';
import { MiamiComponent } from './templates/miami/miami.component';
import { RoyalBlueComponent } from './templates/royal-blue/royal-blue.component';
import { TrendyDesignComponent } from './templates/trendy-design/trendy-design.component';
import { UniformBrownComponent } from './templates/uniform-brown/uniform-brown.component';

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
      },
      {
        path:'amsterdam',
        component:AmsterdamComponent
      }
      ,{
        path:'athens',
        component:AthensComponent
      },
      {
        path:'barcelona',
        component:BarcelonaComponent
      },
      {
        path:'boxed-navy',
        component:BoxedNavyComponent
      },
      {
        path:'global-citizen-green',
        component:GlobalCitizenGreenComponent
      },
      {
        path:'global-citizen-green',
        component:MiamiComponent
      },
      {
        path:'royal-blue',
        component:RoyalBlueComponent
      },
      {
        path:'trendy-design',
        component:TrendyDesignComponent
      },
      {
        path:'uniform-brown',
        component:UniformBrownComponent
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
