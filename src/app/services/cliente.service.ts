import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../listagem-cliente/listagem-cliente.component';

@Injectable()
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get('http://desafio4devs.forlogic.net/api/customers/');
  }

  cadastrar(cliente: Cliente): Observable<any> {
    return this.http.post('http://desafio4devs.forlogic.net/api/customers/', cliente);
  }

  remover(id: string): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/customers'}/${id}`;
    return this.http.delete(url);
  }

  editar(cliente: Cliente): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/customers'}/${cliente.id}`;
    return this.http.put(url, cliente);
  }

}
