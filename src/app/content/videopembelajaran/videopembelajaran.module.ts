import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideopembelajaranRoutingModule } from './videopembelajaran-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    VideopembelajaranRoutingModule
  ],
  declarations: [ContentComponent]
})
export class VideopembelajaranModule { }
