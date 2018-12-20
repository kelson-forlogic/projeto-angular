import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listagem1Component } from './listagem1/listagem1.component';
import { Listagem2Component } from './listagem2/listagem2.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { ListagemAvaliacoesComponent } from './listagem-avaliacoes/listagem-avaliacoes.component';

const routes: Routes = [
  { path: 'listagemClientes', component: ListagemClienteComponent },
  { path: 'listagemAvaliacoes', component: ListagemAvaliacoesComponent},

  { path: '', redirectTo: 'l1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
