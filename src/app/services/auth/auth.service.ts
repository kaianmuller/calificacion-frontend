import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/Login.model';
import { Utils } from 'src/app/shared/Utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }



  async login(login: Login){
    return await this.http
      .post(Utils.ip() + '/login', login)
      .toPromise()
      .then((result) => this.storage(result));
  }



  storage(result: any):void{
    localStorage.setItem('token', result.token);
    this.router.navigate(['/calificaciones']);
  }



  getToken(){
    return localStorage.getItem('token');
  }


  isLogged(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  
}
