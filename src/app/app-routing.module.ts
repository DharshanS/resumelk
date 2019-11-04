import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {PreviewComponent} from './component/preview/preview.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },

  // {
  //   path: '',
  //   component: TemplatesComponent
  // },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'templates',
    loadChildren: "./component/templates/templates.module#TemplatesModule"
  },
  {
    path: 'preview',
    component: PreviewComponent
  },
  { path: 'editor/:id', loadChildren: () => import('./component/options/options.module').then(m => m.OptionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
