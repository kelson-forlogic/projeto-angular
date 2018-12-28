import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  @ViewChild('cliente') clienteRef: ElementRef;
  @ViewChild('contato') contatoRef: ElementRef;
  @ViewChild('data') dataRef: ElementRef;
  @ViewChild('picker') pickerRef: MatDatepicker<Date>;

  cliente: Cliente;

  constructor(
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<CadastroClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) { }

  ngOnInit() {
    if (this.cliente) {
      this.clienteRef.nativeElement.value = this.cliente.nome;
      this.contatoRef.nativeElement.value = this.cliente.contato;
      this.pickerRef.select(new Date(this.cliente.data));
      this.dataRef.nativeElement.value = this.datePipe.transform(new Date(this.cliente.data), 'MM/dd/yyyy');
    }
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

  salvar(): void {
    const obj = {
      id: this.cliente ? this.cliente.id : null,
      nome: this.clienteRef.nativeElement.value,
      contato: this.contatoRef.nativeElement.value,
      data: new Date(this.dataRef.nativeElement.value)
    };
    this.dialogRef.close(obj);
  }

}
