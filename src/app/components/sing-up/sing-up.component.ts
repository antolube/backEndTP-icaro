import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import  { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

interface Province{
  value: string;
  viewValue: string;
}
interface Country{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  register: FormGroup;
  panelOpenState = false;
  hide = true;
  loading= false;
  // isSuccessful = false;
  // isSignUpFailed = false;
  errorMessage = '';

  provinces: Province[] = [
    {value: '0', viewValue: 'Córdoba'},
    {value: '1', viewValue: 'Santa Fé'},
    {value: '2', viewValue: 'Buenos Aires'}
  ];

  countries: Country[] = [
    {value: '1', viewValue: 'Argentina'},
    {value: '2', viewValue: 'Chile'},
    {value: '3', viewValue: 'Ururguay'}
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackbar:MatSnackBar,
    private _authService: AuthService,
    // private _usuariosService:UsuariosService ,
    // private _comunicacion:InteractionsService
    ) {

      this.register = this.fb.group({
        user_name:['', Validators.required,],
        name:['', Validators.required,],
        last_name:['', Validators.required],
        password:['', Validators.required,],
        confirmPassword:['', Validators.required,],
        email:['', Validators.required],
        city:['', Validators.required],
        country:['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  ingresarNuevo(){

    console.log(this.register);

    const user = {
      user_name: this.register.value.user_name,
      name: this.register.value.name,
      last_name: this.register.value.last_name,
      password: this.register.value.password,
      // confirmPassword: this.register.value.confirmPassword,
      email: this.register.value.email,
      country: this.register.value.country,
      city: this.register.value.city,
    };

    console.log(user + "Se toma el registro");

    this._authService.register(user).subscribe((res:any) => {
        console.log(res);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        console.log("se lo pasa al servico");
      },
      err => {
        this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
      );
    // this._usuariosService.agregarUsuario(user);
    // this.fakelogin();
    // this.registroOk();
    // this.comunicoUsuario();


  }

  fakelogin(){
    this.loading= true;
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      // this.loading= false;
      this.router.navigate(['/dashboard']);
    },1500
    );
  }

  registroOk(){
    this._snackbar.open('Resgistro OK','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'top',
        }
    );
  }
  // comunicoUsuario(){
  //   this._comunicacion.saveUser(this.register.value.username);
  //   console.log("estoy tomando este dato para pasarlo :",this.register.value.username);
  }

