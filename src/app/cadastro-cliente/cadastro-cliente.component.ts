import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cliente } from './../interfaces/cliente.interface';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  // @ViewChild('cliente') clienteRef: ElementRef;
  // @ViewChild('contato') contatoRef: ElementRef;
  // @ViewChild('data') dataRef: ElementRef;
  // @ViewChild('picker') pickerRef: MatDatepicker<Date>;

  formulario: FormGroup;
  cliente: Cliente;

  constructor(
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<CadastroClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      id: new FormControl(null),
      cliente: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
      contato: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
      data: new FormControl(null, Validators.compose([Validators.required])),
    });

    if (this.cliente) {
      // joga os dados do objeto this.cliente para as propriedades do form
      this.formulario.patchValue(this.cliente);
    }
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

  salvar(): void {
    this.formulario.controls.cliente.markAsTouched();
    this.formulario.controls.contato.markAsTouched();
    this.formulario.controls.data.markAsTouched();

    if (this.formulario.invalid)
      return;
    // pega os dados do formulario e atribui em um objeto vazio {}
    const obj = Object.assign({}, this.formulario.value);
    this.dialogRef.close(obj);
    // const obj = {
    // id: this.cliente ? this.cliente.id : null,
    // nome: this.clienteRef.nativeElement.value,
    // contato: this.contatoRef.nativeElement.value,
    // data: new Date(this.dataRef.nativeElement.value)
    // };
  }

}
