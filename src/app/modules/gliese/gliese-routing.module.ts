import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlieseHomeComponent } from './components/gliese-home/gliese-home.component';

const routes: Routes = [
  { path: '', component: GlieseHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlieseRoutingModule { }
