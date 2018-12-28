
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AvaliacaoService } from '../services/avaliacao.service';
import { CadastroAvaliacaoComponent } from '../cadastro-avaliacao/cadastro-avaliacao.component';
import { Avaliacao } from '../interfaces/avaliacao.interface';

@Component({
  selector: 'app-listagem-avaliacoes',
  templateUrl: './listagem-avaliacoes.component.html',
  styleUrls: ['./listagem-avaliacoes.component.css']
})
export class ListagemAvaliacoesComponent implements OnInit {

  displayedColumns = ['ref', 'clientes', 'opcoes'];
  dataSource;

  constructor(
    public dialog: MatDialog,
    public service: AvaliacaoService
  ) { }

  openDialog(avaliacao?: Avaliacao): void {
    const dialogRef = this.dialog.open(CadastroAvaliacaoComponent, {
      width: '250px'
    });
    dialogRef.componentInstance.avaliacao = avaliacao;

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.cadastrar(result);
    });
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CadastroAvaliacaoComponent, {
  //     width: '250px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result)
  //       this.cadastrar(result);
  //   });
  // }

  ngOnInit() {
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe(res => {

      // transforma a resposta que é um objeto em um array (lista) clientes
      const avaliacao = Object.keys(res || {}).map((key) => {
        return { id: key, ...res[key] };
      });
      this.dataSource = avaliacao;
    });
  }

  cadastrar(avaliacao: Avaliacao): void {
    this.service.cadastrar(avaliacao).subscribe(res => {
      console.log(res);
      this.listar();
    });
  }

  remover(id: string): void {
    this.service.remover(id).subscribe(res => {
      this.listar();
    });
  }

  editar(id: string, avaliacao: Avaliacao): void {
    this.service.editar(id, avaliacao).subscribe(res => {
      this.listar();
    });
  }
}
