import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Message } from 'src/app/models/messageModel';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.scss']
})
export class ReceivedMessageComponent implements OnInit {

   msg: any=[];

  usuarioMostrar: any = [];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;


  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    ) { }

  ngOnInit(): void {
    this._userService.receivedMessage().subscribe((data) =>{
      console.log(JSON.stringify(data));
      this.msg = data;
      this.dataSource =  new MatTableDataSource(this.msg);
    });
  }

  // reciboComunicacion(){
    //   this.usuarioMostrar = this._comunicacion.getUser();
    //   console.log("estoy reciendo este usuario del servicio:",this.usuarioMostrar)
    // }

    cargarMensajes():void{
  }

  eliminarMensaje(index: number){
    // this._messagesService.eliminarMensaje(index);
    // console.log(index);
    this.cargarMensajes();
  }

}
