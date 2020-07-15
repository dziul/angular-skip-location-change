import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { AnythingComponent } from './anything.component';
import { AnythingRoutingModule } from './anything.routing.module';

@NgModule({
  declarations: [AnythingComponent],
  imports: [CommonModule, AnythingRoutingModule, MaterialModule],
})
export class AnythingModule {}
