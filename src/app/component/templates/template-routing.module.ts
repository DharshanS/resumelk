import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TempOneComponent} from './temp-one/temp-one.component';
import {TemplatesComponent} from './wrapper/templates.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: TemplatesComponent
//   },

//   {
//     path: '/templates',
//     component: TempOneComponent
//   },
//   {path: 'editor',

//   loadChildren: "../../../component/options/options.module#OptionsModule"},

//   path: '', component: FrameDefaultComponent, pathMatch: 'prefix',
//   children: [
//       {path: '', component: SiteCalculatorComponent},
//       {path: 'site-notice', component: SiteSiteNoticeComponent}
//   ]

// ];



const routes: Routes = [
  {
        path: '',
         component: TemplatesComponent
       },
  // { path: 'editor', loadChildren:"../options/options.module#OptionsModule" },

//    { path: 'editor/:id', loadChildren: () => import('../options/options.module').then(m => m.OptionsModule) },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class TemplateRoutingModule { }
