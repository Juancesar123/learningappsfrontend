import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatauserRoutingModule } from './datauser-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    DatauserRoutingModule
  ],
  declarations: [ContentComponent]
})
export class DatauserModule { }
