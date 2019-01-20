import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatapesertaRoutingModule } from './datapeserta-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    DatapesertaRoutingModule
  ],
  declarations: [ContentComponent]
})
export class DatapesertaModule { }
