import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  usuarios: User [] =[];
  loading= false;
  form: FormGroup;


  mensajes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,) {

      this.form = this.fb.group({
        remitente:['', Validators.required],
        fecha:new Date(),
        mensaje:['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  // getTraerUsuarios(){
  //   this.usuarios = this._userService.getUsuarios();
  // }

  SendMsj(){
    const mensajes : any = {
      remitente:this.form.value.remitente,
      fecha:this.form.value.fecha,
      mensaje:this.form.value.mensaje,
    }
    // this._sendService.agregarMensaje(mensajes);
    this.fakeSend();
    // this.router.navigate(['/dashboard']);
    // this._interactionsService.nvoMsj(this.form.value.mensaje);
    console.log("estoy enviando el mensaje:",this.mensajes);

  }

  fakeSend(){
    this.loading= true;
    this.form.reset();
    setTimeout(()=>{
      //redirecccionamos al al escritorio
      this._snackbar.open('Mensaje Enviado','',
      {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'top',
      });
      this.loading= false;

    },1500
    );
  }

  infoNewMsj(){

  }

}
