import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { SecondComponent } from './second.component';
import { SecondRoutingModule } from './second.routing.module';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, SecondRoutingModule, MaterialModule],
})
export class SecondModule {}
