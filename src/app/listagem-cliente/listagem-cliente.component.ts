import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.css']
})
export class ListagemClienteComponent implements OnInit {

  displayedColumns = ['nome', 'contato', 'data'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() { }
}

const ELEMENT_DATA: Cliente[] = [
  { nome: 'Fulano', contato: 'Contato1', data: new Date(2018, 4, 2) },
  { nome: 'Beltrano', contato: 'Contato2', data: new Date(2019, 5, 1) },
  { nome: 'Ciclano', contato: 'Contato3', data: new Date(2015, 1, 2) },
  { nome: 'Fulano', contato: 'Contato4', data: new Date(2017, 5, 1) },
  { nome: 'Beltrano', contato: 'Contato5', data: new Date(2018, 3, 4) }
];

export interface Cliente {
  nome: string;
  contato: string;
  data: Date;
}
