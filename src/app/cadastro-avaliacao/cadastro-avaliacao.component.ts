import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Cliente } from '../listagem-cliente/listagem-cliente.component';

@Component({
  selector: 'app-cadastro-avaliacao',
  templateUrl: './cadastro-avaliacao.component.html',
  styleUrls: ['./cadastro-avaliacao.component.css']
})
export class CadastroAvaliacaoComponent implements OnInit {

  nomes = new FormControl();
  listaDeNomes: string[] = ['Ximalas', 'Laivu', 'Wosulond', 'Bakmeku', 'Gorcoina'];

  constructor(
    public dialogRef: MatDialogRef<CadastroAvaliacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) { }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
