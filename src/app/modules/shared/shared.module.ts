import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstroHeaderComponent } from './components/astro-header/astro-header.component';
import { AstroFooterComponent } from './components/astro-footer/astro-footer.component';



@NgModule({
  declarations: [
    AstroHeaderComponent,
    AstroFooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AstroHeaderComponent,
    AstroFooterComponent
  ]
})
export class SharedModule { }
