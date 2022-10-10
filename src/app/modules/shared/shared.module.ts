import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstroHeaderComponent } from './components/astro-header/astro-header.component';
import { AstroFooterComponent } from './components/astro-footer/astro-footer.component';
import { AstroNavigationComponent } from './components/astro-navigation/astro-navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AstroHeaderComponent,
    AstroFooterComponent,
    AstroNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
  exports: [
    AstroHeaderComponent,
    AstroFooterComponent,
    AstroNavigationComponent
  ]
})
export class SharedModule { }
