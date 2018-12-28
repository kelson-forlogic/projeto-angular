
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelect, MatDatepicker } from '@angular/material';
import { Avaliacao } from './../listagem-avaliacoes/listagem-avaliacoes.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-avaliacao',
  templateUrl: './cadastro-avaliacao.component.html',
  styleUrls: ['./cadastro-avaliacao.component.css']
})
export class CadastroAvaliacaoComponent implements OnInit {

  @ViewChild('mes') mesRef: ElementRef;
  @ViewChild('ano') anoRef: ElementRef;
  @ViewChild('nomes') nomesRef: MatSelect;

  avaliacao: Avaliacao;

  nomes = new FormControl();
  listaDeNomes: string[] = ['Ximalas', 'Laivu', 'Wosulond', 'Bakmeku', 'Gorcoina'];

  constructor(
    public dialogRef: MatDialogRef<CadastroAvaliacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Avaliacao
  ) { }

  ngOnInit() {
    if (this.avaliacao) {
      this.mesRef.nativeElement.value = this.avaliacao.mes;
      this.anoRef.nativeElement.value = this.avaliacao.ano;


      // this.clienteRef.nativeElement.value = this.cliente.nome;
      // this.contatoRef.nativeElement.value = this.cliente.contato;
      // this.pickerRef.select(new Date(this.cliente.data));
      // this.dataRef.nativeElement.value = this.datePipe.transform(new Date(this.cliente.data), 'dd/mm/yyyy');
    }
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

  salvar(): void {
    const obj = {
      mes: this.mesRef.nativeElement.value,
      ano: this.anoRef.nativeElement.value,
      nomes: this.nomesRef
    };
    this.dialogRef.close(obj);
  }

}
