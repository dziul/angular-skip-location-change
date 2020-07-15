import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first.routing.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FirstRoutingModule, MaterialModule],
})
export class FirstModule {}
