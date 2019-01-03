import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { ListagemAvaliacoesComponent } from './listagem-avaliacoes/listagem-avaliacoes.component';

const routes: Routes = [
  // { path: 'templateForm', component: TemplateFormComponent},
  // { path: 'dataForm', component: DataFormComponent},

  { path: 'listagemClientes', component: ListagemClienteComponent },
  { path: 'listagemAvaliacoes', component: ListagemAvaliacoesComponent},

  { path: '', redirectTo: 'l1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
