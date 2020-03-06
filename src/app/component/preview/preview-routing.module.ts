import { NgModule, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SunComponent } from "./templates/sun/sun.component";
import { EinsteinComponent } from "./templates/einstein/einstein.component";

import { PreviewComponent } from "./preview.component";
import { NewtonComponent } from './templates/newton/newton.component';
import { HawkingComponent } from './templates/hawking/hawking.component';


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
        component: DarwinComponent

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
        path:'galileo-galilei',
        component:GalileoGalileiComponent
      },
    
      {
        path:'paris',
        component:ParisComponent
      },
      {
        path:'leonardo-da-vinci',
        component:LeonardoDaVinciComponent
      },
      {
        path:'alexander-graham-bell',
        component:AlexanderGrahamBell
      },
      {
        path:'amsterdam',
        component:AmsterdamComponent
      }
      ,{
        path:'isaac-newton',
        component:IsaacNewtonComponent
      },
      {
        path:'nikola-tesla',
        component:NikolaTeslaComponent
      },
      {
        path:'thomas-edison',
        component:ThomasEdisonComponent
      },
      {
        path:'stephen-hawking',
        component:StephenHawkingComponent
      },
      {
        path:'charles-darwin',
        component:CharlesDarwinComponent
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
