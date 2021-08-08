import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


const TOKEN_KEY ='tokenOK';
// const USER_KEY ='safety-user_name';
// const USER_ID_KEY ='safety-id_user';
@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) { }

  singOut():void{
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    console.log("Saving token")
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string | null {
    console.log("estoy tomando el token:" + TOKEN_KEY);
    return window.sessionStorage.getItem(TOKEN_KEY);
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


  // public saveUser(user_name: any): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user_name));
  // }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return {};
  // }
  // public getUserId(): any {
  //   const userId = window.sessionStorage.getItem(USER_ID_KEY);
  //   if (userId) {
  //     return JSON.parse(userId);
  //   }
  //   return {};
  // }
}
