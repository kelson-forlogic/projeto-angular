import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = req.headers.set('Authorization', 'forlogic-nps');

    const authReq = req.clone({
      headers: headers
    });

    return next.handle(authReq)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse)
            if (err.status === 0) {
              console.log('Check your internet connection and try again later');
            } else if (err.status === 401) {
              console.log('Não autorizado');
            }
          return throwError(err);
        })
      );
  }

}
