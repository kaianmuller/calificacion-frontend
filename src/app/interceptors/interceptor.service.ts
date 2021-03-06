import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private readonly authServ: AuthService,private router:Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = this.getAuthRoute();

    const reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(catchError(this.captureError.bind(this)));
  }

  captureError(error: HttpErrorResponse) {
    if (error.status == 403 || error.status == 401) {
      console.log('no estas authorizado: interceptor');
      this.authServ.logout();
      this.router.navigate(['/home']);
    } else if (
      error.status == 0 ||
      error.status == 404 ||
      error.status == 500
    ) {
      console.log('No encontrado: interceptor');
    }
    return throwError(error);
  }


  getAuthRoute(){
    return this.router.url != '/home'?
    new HttpHeaders({
      'content-type': 'application/json',
       Authorization: 'Bearer ' + this.authServ.getToken()?.toString(),
    }):
    new HttpHeaders({
      'content-type': 'application/json'
    });
  }






}
