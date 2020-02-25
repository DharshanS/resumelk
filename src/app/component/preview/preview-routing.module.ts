import { NgModule, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SunComponent } from "./templates/sun/sun.component";
import { EinsteinComponent } from "./templates/einstein/einstein.component";
import { MoonComponent } from "./templates/moon/moon.component";
import { PreviewComponent } from "./preview.component";
import { NewtonComponent } from './templates/newton/newton.component';
import { HawkingComponent } from './templates/hawking/hawking.component';

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
