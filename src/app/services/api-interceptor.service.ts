import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (window.sessionStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      });
    }

    return next.handle(request);
  }
}
