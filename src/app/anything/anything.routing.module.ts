import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnythingComponent } from './anything.component';

const startedRoute: Routes = [
  {
    path: '',
    component: AnythingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class AnythingRoutingModule {}
