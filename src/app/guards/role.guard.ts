import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/userModel';
import decode from 'jwt-decode'
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor (
    private _tokenStorage: TokenStorageService,
    private _jwtService: JwtHelperService,
    public router: Router,
    ){}


  // canActivate(route: ActivatedRouteSnapshot):boolean{
  //     const expectedRole = route.data.expectedRole;
  //     const token:any = localStorage.getItem('token');

  //     const {user_name} = decode(token);
  //     console.log(user_name);

  //     if( !this.authService.isAuth() ||!roleId === expectedRole){
  //       console.log('Usuario no Autorizado');
  //       this.router.navigate(['login']);
  //       return false;
  //     }
  //  return true;
  // }

  canActivate(){
    if (!this._tokenStorage.isLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
