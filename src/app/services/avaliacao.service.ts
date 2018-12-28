import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Avaliacao } from './../listagem-avaliacoes/listagem-avaliacoes.component';

@Injectable()
export class AvaliacaoService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get('http://desafio4devs.forlogic.net/api/evaluations');
  }

  cadastrar(avaliacao: Avaliacao): Observable<any> {
    return this.http.post('http://desafio4devs.forlogic.net/api/evaluations', avaliacao);
  }

  remover(id: string): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/evaluations'}/${id}`;
    return this.http.delete(url);
  }

  editar(id: string, avaliacao: Avaliacao): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/evaluations'}/${id}`;
    return this.http.put(url, avaliacao);
  }

}
