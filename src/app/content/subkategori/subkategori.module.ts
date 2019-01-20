import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubkategoriRoutingModule } from './subkategori-routing.module';
import { ContentsubkategoriComponent } from './contentsubkategori/contentsubkategori.component';

@NgModule({
  imports: [
    CommonModule,
    SubkategoriRoutingModule
  ],
  declarations: [ContentsubkategoriComponent]
})
export class SubkategoriModule { }
