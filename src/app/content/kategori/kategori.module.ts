import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategoriRoutingModule } from './kategori-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    KategoriRoutingModule
  ],
  declarations: [ContentComponent]
})
export class KategoriModule { }
