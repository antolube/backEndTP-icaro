import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {TokenStorageService} from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  hide = true;

  form: FormGroup;
  loading= false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private fb :FormBuilder ,
    private _snackbar:MatSnackBar,
    private router:Router,
    private _authService: AuthService,
    private _tokenStorage: TokenStorageService
    )
    {

    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    });
  }
  ngOnInit(): void {}

  // ingresar(){
  //     const user_name = this.form.value.usuario;
  //   const password = this.form.value.password;

  //   this._authService.login(user_name, password).subscribe( (data:any) =>{
  //     console.log(data);
  //     window.sessionStorage.setItem('token',data.token);
  //     this.router.navigate(['/dashboard'])
  //   });
  // }


  ingresar(){
    console.log(this.form);
    const user_name = this.form.value.usuario;
    const password = this.form.value.password;

    this._authService.login(user_name, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data.token);
        // this._tokenStorage.saveUser(data.user_name);
        // this._tokenStorage.
        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.fakelogin();
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        this.error();
        this.form.reset();
      }
    );

  //   // if(usuario == "antonio" && password == "a" ){
  //   //   //redireccionamos al escritorio de usuario
  //   //   this.fakelogin();
  //   //   // this.usuarioLogeado();
  //   //   // this.comunicoUsuario();
  //   // }else{
  //   //   //mostrar mensaje de error
  //   //   this.error();
  //   //   this.form.reset();
  //   // }
  }

  error(){
    this._snackbar.open('Usuario o Contraseña Incorrectos','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'top',
        }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      // this.loading= false;
      this.router.navigate(['/dashboard'])
    },1500
    );
  }
}
