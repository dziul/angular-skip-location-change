import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnythingComponent } from './anything/anything.component';

const routes: Routes = [
  {
    path: 'first',
    data: { name: 'ok' },
    loadChildren: () => import('./first/first.module').then((m) => m.FirstModule),
  },
  {
    path: 'second',
    data: { id: '12345678909876' },
    loadChildren: () => import('./second/second.module').then((m) => m.SecondModule),
  },
  {
    path: 'anything',
    data: { is: false },
    loadChildren: () => import('./anything/anything.module').then((m) => m.AnythingModule),
  },
  // {
  //   path: '',
  //   component: AnythingComponent, // para default, usar prop 'component'
  // },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
