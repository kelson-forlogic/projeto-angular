import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';


@Injectable()
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<any> {
    return this.http.get('http://desafio4devs.forlogic.net/api/customers/');
  }

  remover(id: string): Observable<any> {
    const url = `${'http://desafio4devs.forlogic.net/api/customers'}/${id}`;
    return this.http.delete(url);
  }

  save(cliente: Cliente): Observable<any> {
    const method = cliente.id ? this.http.put : this.http.post;
    const url = `http://desafio4devs.forlogic.net/api/customers/${(cliente.id ? cliente.id : '')}`;
    return method.bind(this.http)(url, cliente);
  }
  // cadastrar(cliente: Cliente): Observable<any> {
  //   return this.http.post('http://desafio4devs.forlogic.net/api/customers/', cliente);
  // }

  // editar(cliente: Cliente): Observable<any> {
  //   const url = `${'http://desafio4devs.forlogic.net/api/customers'}/${cliente.id}`;
  //   return this.http.put(url, cliente);
  // }


}
