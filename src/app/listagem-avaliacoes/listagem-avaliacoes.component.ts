import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CadastroAvaliacaoComponent } from '../cadastro-avaliacao/cadastro-avaliacao.component';

@Component({
  selector: 'app-listagem-avaliacoes',
  templateUrl: './listagem-avaliacoes.component.html',
  styleUrls: ['./listagem-avaliacoes.component.css']
})
export class ListagemAvaliacoesComponent implements OnInit {

  displayedColumns = ['ref', 'nome'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroAvaliacaoComponent, {
      width: '250px',
      data: {nome: 'teste'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() { }
}

const ELEMENT_DATA: Avaliacao[] = [
  { ref: new Date(2012, 4), nome: 'Ximalas' },
  { ref: new Date(2015, 2), nome: 'Laivu' },
  { ref: new Date(2016, 5), nome: 'Wosulond' },
  { ref: new Date(2017, 1), nome: 'Bakmeku' },
  { ref: new Date(2019, 2), nome: 'Gorcoina' }
];

export interface Avaliacao {
  ref: Date;
  nome: string;
}
