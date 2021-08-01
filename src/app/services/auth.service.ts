import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/userModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router } from '@angular/router';
import decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:3000/api/v1/'

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    ) { }



login(user_name: string, password: string){
  return this.http.post(`${this.URL}safety/singin`,{user_name,password});
}

register(user: User){
  return this.http.post(`${this.URL}safety/singup`,user);
}

  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      this.router.navigate(['singin'])
      return false;
    }
    return true;
  }

  userId(){
    const token:any = localStorage.getItem('token');
    const {id_user} = this.jwtHelper.decodeToken(token);
    console.log(id_user);

    return id_user;

  }

}
