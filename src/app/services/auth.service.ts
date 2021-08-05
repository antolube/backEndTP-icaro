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
    const token:any = window.sessionStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token) || !window.sessionStorage.getItem('token')){
      this.router.navigate(['singin'])
      return false;
    }
    return true;

  }

  userId(){
    if( this.isAuth() === true){
      const token:any = window.sessionStorage.getItem('token');
      const {id_user} = this.jwtHelper.decodeToken(token);
      console.log(id_user);
      return id_user;
    }
  }
  user_name(){
    if( this.isAuth() === true){
    const token:any = window.sessionStorage.getItem('token');
    const {user_name} = this.jwtHelper.decodeToken(token);
    console.log(user_name);
    return user_name;
    }
  }

  signOut(){
    window.sessionStorage.clear();
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('tokenHeader');
    window.sessionStorage.removeItem('id_user');
    window.sessionStorage.removeItem('user_name');
    window.sessionStorage.reload();
    console.log("esoty removiendo estos datos:"+`${this.userId,this.user_name}`);
    }
}
