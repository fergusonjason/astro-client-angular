import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialSharedModule
  ]
})
export class HomeModule { }
