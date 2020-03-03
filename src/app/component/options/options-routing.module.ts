
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { MainComponent } from './main/main.component';





const optionsRoute: Routes = [
  {



    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        //   component: DashboardComponent

      },
      {
        path: 'templates',
        //  component: TemplatesComponent

      },
      {
        path: '/editor',
        component: EditorComponent

      },
      {
        path: 'preview',
        // component: PreviewComponent

      }
    ]
  },




]

@NgModule({
  imports: [RouterModule.forChild(optionsRoute)],
  exports: [RouterModule]

})
export class OptionRoutingModule {

}
