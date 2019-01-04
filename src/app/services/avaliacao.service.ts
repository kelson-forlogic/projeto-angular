import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from '../interfaces/avaliacao.interface';


@Injectable()
export class AvaliacaoService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get('http://desafio4devs.forlogic.net/api/evaluations');
  }

  remover(id: string): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/evaluations'}/${id}`;
    return this.http.delete(url);
  }

  save(avaliacao: Avaliacao): Observable<any> {
    const method = avaliacao.id ? this.http.put : this.http.post;
    const url = `${'http://desafio4devs.forlogic.net/api/evaluations'}/${(avaliacao.id ? avaliacao.id : '')}`;
    return method.bind(this.http)(url, avaliacao);
  }

  // editar(avaliacao: Avaliacao): Observable<any> {
  //   const url = `${'http://desafio4devs.forlogic.net/api/evaluations'}/${avaliacao.id}`;
  //   return this.http.put(url, avaliacao);
  // }

  // cadastrar(avaliacao: Avaliacao): Observable<any> {
  //   return this.http.post('http://desafio4devs.forlogic.net/api/evaluations', avaliacao);
  // }
}
