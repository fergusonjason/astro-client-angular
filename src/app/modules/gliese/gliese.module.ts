import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlieseRoutingModule } from './gliese-routing.module';
import { GlieseHomeComponent } from './components/gliese-home/gliese-home.component';


@NgModule({
  declarations: [
    GlieseHomeComponent
  ],
  imports: [
    CommonModule,
    GlieseRoutingModule
  ],
  exports: [
    GlieseHomeComponent
  ]
})
export class GlieseModule { }
