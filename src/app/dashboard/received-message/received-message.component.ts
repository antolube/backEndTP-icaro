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

  deleted:any ={
    id_message: 'number',
    updatedMsg: 'string',
  };

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

  updatedMsg(id_message:number){

    console.log(id_message);

    this.deleted = {
      updatedMsgSent: undefined ,//activo
      updatedMsgReceided: 0,//elimino de mensajes recibidos
    };
    this._userService.updatedMsg(id_message,this.deleted).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
    })
  }

}
