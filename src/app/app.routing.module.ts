import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalExitComponent } from './modal-exit/modal-exit.component';

const routes: Routes = [
  {
    path: 'first',
    data: { name: 'first root' },
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
  {
    path: 'modal-exit',
    component: ModalExitComponent,
    data: { left: true },
    outlet: 'modal',
  },
  // { path: '',   redirectTo: '/first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
