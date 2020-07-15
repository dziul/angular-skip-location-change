import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondComponent } from './second.component';

const startedRoute: Routes = [
  {
    path: '',
    component: SecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(startedRoute)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
