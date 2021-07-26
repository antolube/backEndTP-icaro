import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.scss']
})
export class ReceivedMessageComponent implements OnInit {

  mensajes: any [] =[];

  usuarioMostrar: any = [];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;


  constructor() { }

  ngOnInit(): void {
  }

  // reciboComunicacion(){
  //   this.usuarioMostrar = this._comunicacion.getUser();
  //   console.log("estoy reciendo este usuario del servicio:",this.usuarioMostrar)
  // }

  // cargarMensajes(){
  //   this.mensajes = this._messagesService.getMessages();
  //   this.dataSource =  new MatTableDataSource(this.mensajes);
  // }

  // eliminarMensaje(index: number){
  //   this._messagesService.eliminarMensaje(index);
  //   console.log(index);
  //   this.cargarMensajes();
  // }

}
