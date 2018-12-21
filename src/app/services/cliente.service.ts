import { Injectable } from '@angular/core';
import { Cliente } from '../listagem-cliente/listagem-cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    { nome: 'Siborn', contato: 'Hyon', data: new Date(2018, 4, 2) },
    { nome: 'Volplozo', contato: 'Kialze', data: new Date(2019, 5, 1) },
    { nome: 'Kiuzezur', contato: 'Wuldluo', data: new Date(2015, 1, 2) },
    { nome: 'Felapuon', contato: 'Othmza', data: new Date(2017, 5, 1) },
    { nome: 'Delthen', contato: 'Celebvoi', data: new Date(2018, 3, 4) }
  ];

  constructor() { }

  get(): Cliente[] {
    return this.clientes;
  }

}
