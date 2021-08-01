import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/userModel';
import { Message } from 'src/app/models/messageModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  // message: Message;
  diary:any=[];
  loading= false;
  form: FormGroup;


  mensajes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private _userService: UserService,
    private _authService: AuthService,
  )
  {
      this.form = this.fb.group({
        remitente:['', Validators.required],
        // fecha:new Date(),
        mensaje:['', Validators.required]
      })
    }

  ngOnInit(): void {
    // console.log(this._userService.getDiary())
      this._userService.getDiary().subscribe((data) => {
      // console.log(data);
      this.diary = data;
      console.log(this.diary)
    });
    this._authService.userId();
  }

  // getTraerUsuarios(){
  //   this.usuarios = this._userService.getDiary();
  // }

  SendMsj(){

    const mensajes : Message = {

      sender_id: this._authService.userId(),
      ricipient_id: this.form.value.remitente,
      message:this.form.value.mensaje,

    };


    this._userService.newMessage(mensajes).subscribe((data)=>{
      console.log(JSON.stringify(data));
    })


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
