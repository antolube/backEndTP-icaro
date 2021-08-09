import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



const TOKEN_KEY ='token';
const USER_KEY ='user_name';
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
    console.log("Saving token:"+JSON.stringify(token))
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user_name: any): void {
    console.log('Saving user:'+JSON.stringify(user_name));
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user_name));
  }

  isAuth():boolean{
    const token:any = this.getToken()
    if (this.jwtHelper.isTokenExpired(token) || !this.getToken()){
      this.router.navigate(['singin'])
      return false;
    }
    return true;

  }

  userId(){
    if( this.isAuth() === true){
      const token:any = this.getToken();
      const {id_user} = this.jwtHelper.decodeToken(token);
      console.log(id_user);
      return id_user;
    }
  }
  username(){
    if( this.isAuth() === true){
    const token:any = this.getToken();
    const {user_name} = this.jwtHelper.decodeToken(token);
    console.log(user_name);
    return user_name;
    }
  }

  isLoggedIn():boolean{
    const token:any = this.getToken()
    if (this.jwtHelper.isTokenExpired(token) || !this.getToken()){
    this.router.navigate(['singin'])
    return false;
    }
    return true;
  }



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
