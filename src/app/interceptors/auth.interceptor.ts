import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('token');

    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
