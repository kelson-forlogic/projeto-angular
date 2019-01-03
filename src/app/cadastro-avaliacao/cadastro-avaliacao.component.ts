
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Avaliacao } from '../interfaces/avaliacao.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro-avaliacao',
  templateUrl: './cadastro-avaliacao.component.html',
  styleUrls: ['./cadastro-avaliacao.component.css']
})
export class CadastroAvaliacaoComponent implements OnInit {

  // @ViewChild('mes') mesRef: ElementRef;
  // @ViewChild('ano') anoRef: ElementRef;
  // @ViewChild('nomes') nomesRef: MatSelect;

  avaliacao: Avaliacao;
  nomes = new FormControl();
  listaDeNomes: string[]; // = ['Ximalas', 'Laivu', 'Wosulond', 'Bakmeku', 'Gorcoina'];
  formulario: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private dialogRef: MatDialogRef<CadastroAvaliacaoComponent>
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      id: new FormControl(null),
      mes: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
      ano: new FormControl(null, Validators.compose([Validators.required])),
      clientes: new FormControl(null, Validators.compose([Validators.required]))
    });

    this.getClientes();
    if (this.avaliacao) {
      this.formulario.patchValue(this.avaliacao);
    }
    // if (this.avaliacao) {
    //   this.mesRef.nativeElement.value = this.avaliacao.mes;
    //   this.anoRef.nativeElement.value = this.avaliacao.ano;


    // this.clienteRef.nativeElement.value = this.cliente.nome;
    // this.contatoRef.nativeElement.value = this.cliente.contato;
    // this.pickerRef.select(new Date(this.cliente.data));
    // this.dataRef.nativeElement.value = this.datePipe.transform(new Date(this.cliente.data), 'dd/mm/yyyy');
    // });
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

  salvar(): void {
    this.formulario.controls.mes.markAsTouched();
    this.formulario.controls.ano.markAsTouched();
    this.formulario.controls.clientes.markAsTouched();

    if (this.formulario.invalid)
      return;
    const obj = Object.assign({}, this.formulario.value);
    // const obj = {
    //   mes: this.mesRef.nativeElement.value,
    //   ano: this.anoRef.nativeElement.value,
    //   nomes: this.nomesRef
    // };
    console.log(obj);
    this.dialogRef.close(obj);
  }

  getClientes(): void {
    this.clienteService.listar().subscribe(res => {
      // transforma a resposta que é um objeto em um array (lista) clientes
      const clientes = Object.keys(res || {}).map((key) => res[key].cliente);
      this.listaDeNomes = clientes;
    });
  }

}
