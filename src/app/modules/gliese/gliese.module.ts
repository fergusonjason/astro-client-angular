import { NgModule } from '@angular/core';

import { GlieseRoutingModule } from './gliese-routing.module';
import { GlieseHomeComponent } from './components/gliese-home/gliese-home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { CoreModule } from '../core/core.module';
import { GlieseService } from './services/gliese.service';


@NgModule({
  declarations: [
    GlieseHomeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    MaterialSharedModule,
    GlieseRoutingModule
  ],
  exports: [
    GlieseHomeComponent
  ],
  providers: [GlieseService]
})
export class GlieseModule { }
