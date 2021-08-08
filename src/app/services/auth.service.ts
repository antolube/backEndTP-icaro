import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../models/userModel';
import {Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
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



login(user_name: string, password: string):Observable<any>{
  return this.http.post(`${this.URL}safety/singin`,{
    user_name,
    password
  },httpOptions);
}

register(user: User):Observable<any>{
  return this.http.post(`${this.URL}safety/singup`,
  user,
  httpOptions);
}


  isAuth():boolean{
    const token:any = window.sessionStorage.getItem('tokenOK');
    if (this.jwtHelper.isTokenExpired(token) || !window.sessionStorage.getItem('tokenOK')){
      this.router.navigate(['singin'])
      return false;
    }
    return true;

  }

  userId(){
    if( this.isAuth() === true){
      const token:any = window.sessionStorage.getItem('tokenOK');
      const {id_user} = this.jwtHelper.decodeToken(token);
      console.log(id_user);
      return id_user;
    }
  }
  username(){
    if( this.isAuth() === true){
    const token:any = window.sessionStorage.getItem('tokenOK');
    const {user_name} = this.jwtHelper.decodeToken(token);
    console.log(user_name);
    return user_name;
    }
  }

  // singOut(){
  //     localStorage.removeItem('id_user');
  //     localStorage.removeItem('user_name');
  //     console.log(localStorage.removeItem('id_user,user_name'));
  // }

}
