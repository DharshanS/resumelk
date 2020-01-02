import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { TemplatesComponent } from "./component/templates/templates.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },

  {
    path: "templates",
    component: TemplatesComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "edit",
    loadChildren: () =>
      import("./component/preview/preview.module").then(m => m.PreviewModule)
  },

  {
    path: "preview",
    component: DashboardComponent
  },
  {
    path: "editor/:id",
    loadChildren: () =>
      import("./component/options/options.module").then(m => m.OptionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
