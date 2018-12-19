import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-avaliacoes',
  templateUrl: './listagem-avaliacoes.component.html',
  styleUrls: ['./listagem-avaliacoes.component.css']
})
export class ListagemAvaliacoesComponent implements OnInit {

  displayedColumns = ['ref', 'nome'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() { }
}

const ELEMENT_DATA: Avaliacao[] = [
  { ref: new Date(2012, 4), nome: 'Fulano' },
  { ref: new Date(2015, 2), nome: 'Beltrano' },
  { ref: new Date(2016, 5), nome: 'Ciclano' },
  { ref: new Date(2017, 1), nome: 'Fulano' },
  { ref: new Date(2019, 2), nome: 'Ciclano' }
];

export interface Avaliacao {
  ref: Date;
  nome: string;
}
