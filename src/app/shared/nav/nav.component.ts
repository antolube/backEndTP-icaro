import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuarioMostrar: any = [];
  login: boolean = false;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _tokenInterceptorService: TokenInterceptorService,
  ) { }

  ngOnInit(): void {
    this.usuarioMostrar = this._authService.user_name().subscribe((data:any) => {
      console.log("Estoy recibiendo este usuario:" + JSON.stringify(data));
    });
  }

  userlogin(){
    // console.log(this.usuarioMostrar);
    if(this.usuarioMostrar.length > 0){
      return this.login = true;
    }else{
      return false;
    }
  }


  logout(){
    // this._authService.signOut().subscribe((data:any) =>{

    // })
    // window.location.reload(),
    // localStorage.removeItem('login')
}

}
