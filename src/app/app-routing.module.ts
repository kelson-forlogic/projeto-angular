
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listagem1Component } from './listagem1/listagem1.component';
import { Listagem2Component } from './listagem2/listagem2.component';

const routes: Routes = [
  { path: 'l1', component: Listagem1Component },
  { path: 'l2', component: Listagem2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
