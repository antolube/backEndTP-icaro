import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/userModel';
import { Message } from 'src/app/models/messageModel';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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


  msg: Message= {
    sender_id: 'string' ,
    sender_name: '',
    recipient_id:'string',
    message:'string',
    create_at:'string',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private _userService: UserService,
    private _authService: AuthService,
    private _tokenStorage: TokenStorageService,
  )
  {
      this.form = this.fb.group({
        remitente:['', Validators.required],
        // fecha:new Date(),
        mensaje:['', Validators.required]
      })
    }

  ngOnInit(): void {
      this._userService.getDiary().subscribe((data) => {
      console.log("estos son los contactos para el diary: "+JSON.stringify(data));
      this.diary = data;
      // console.log(this.diary)
    });
    this._tokenStorage.userId();
    this._tokenStorage.username();
    console.log(JSON.stringify(this._tokenStorage.username()))
  }

  // getTraerUsuarios(){
  //   this.usuarios = this._userService.getDiary();
  // }

  SendMsj():void{

      this.msg= {

      sender_id: this._tokenStorage.userId(),
      sender_name:this._tokenStorage.username(),
      recipient_id: JSON.parse(this.form.value.remitente),
      message:this.form.value.mensaje,
      create_at: '',
    };

    this._userService.newMessage(this.msg).subscribe((data)=>{
      console.log(JSON.stringify(data));
    });


    this.fakeSend();
    this.router.navigate(['/dashboard'])
    // this._interactionsService.nvoMsj(this.form.value.mensaje);
    console.log("estoy enviando el mensaje:"+JSON.stringify(this.msg));

  }

  fakeSend(){
    this.loading= true;
    this.form.reset();
    this.reloadPage();
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

  reloadPage(): void {
    window.location.reload();
  }

}
