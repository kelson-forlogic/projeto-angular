
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.css']
})
export class ListagemClienteComponent implements OnInit {

  displayedColumns = ['nome', 'contato', 'data', 'opcoes'];
  dataSource;

  constructor(
    public dialog: MatDialog,
    public service: ClienteService // injeção de dependência
  ) { }

  ngOnInit() {
    this.listar();
  }

  openDialog(cliente?: Cliente): void {
    const dialogRef = this.dialog.open(CadastroClienteComponent, {
      width: '250px'
    });
    dialogRef.componentInstance.cliente = cliente;

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.save(result);
    });
  }

  listar(): void {
    this.service.listar().subscribe(res => {
      // transforma a resposta que é um objeto em um array (lista) clientes
      const clientes = Object.keys(res || {}).map((key) => {
        return { id: key, ...res[key] };
      });
      this.dataSource = clientes;
    });
  }

  save(cliente: Cliente): void {
    this.service.save(cliente).subscribe(res => {
      this.listar();
    });
  }

  remover(id: string): void {
    this.service.remover(id).subscribe(res => {
      this.listar();
    });
  }
}

// cadastrar(cliente: Cliente): void {
//   this.service.cadastrar(cliente).subscribe(res => {
//     this.listar();
//   });
// }

// editar(cliente: Cliente): void {
//   this.service.editar(cliente).subscribe(res => {
//     this.listar();
//   });
// }



