import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRoutes } from './modules/core/types/customroute.type';
import { HomeComponent } from './modules/home/components/home/home.component';



const routes: CustomRoutes = [
  { path: 'home', text: 'Home', component: HomeComponent },
  { path: 'gliese', text: 'Gliese',
    loadChildren: () => import('./modules/gliese/gliese.module').then(m => m.GlieseModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
