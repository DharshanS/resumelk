import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SunComponent } from "./templates/sun/sun.component";
import { EinsteinComponent } from "./templates/einstein/einstein.component";
import { MoonComponent } from "./templates/moon/moon.component";
import { PreviewComponent } from "./preview.component";

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
        path: "template-moon",
        component: MoonComponent

      },
      {
        path: "template-einstein",
        component: EinsteinComponent

      }


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(optionsRoute)],
  exports: [RouterModule]
})
export class PreviewRoutingModule {}
