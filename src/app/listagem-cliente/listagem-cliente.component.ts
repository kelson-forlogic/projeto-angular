
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.css']
})
export class ListagemClienteComponent implements OnInit {

  displayedColumns = ['nome', 'contato', 'data'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroClienteComponent, {
      width: '250px',
      data: {nome: 'teste'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() { }

}

const ELEMENT_DATA: Cliente[] = [
  { nome: 'Siborn', contato: 'Hyon', data: new Date(2018, 4, 2) },
  { nome: 'Volplozo', contato: 'Kialze', data: new Date(2019, 5, 1) },
  { nome: 'Kiuzezur', contato: 'Wuldluo', data: new Date(2015, 1, 2) },
  { nome: 'Felapuon', contato: 'Othmza', data: new Date(2017, 5, 1) },
  { nome: 'Delthen', contato: 'Celebvoi', data: new Date(2018, 3, 4) }
];

export interface Cliente {
  nome: string;
  contato: string;
  data: Date;
}


