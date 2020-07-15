import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first.component';

const startedRoute: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
