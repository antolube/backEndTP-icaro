import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent implements OnInit {

  mensajesEnviados: any [] = [];


  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
  }

  // cargarMensajesEnviados(){

  //   this.mensajesEnviados = this._sendService.getMensajesEnviados();
  //   this.dataSource = new MatTableDataSource(this.mensajesEnviados);
  //   // this.recargar();
  // }

  // eliminarMensaje(index: number){
  //   this._sendService.eliminarMensaje(index);
  //   this.cargarMensajesEnviados();
  // }

}
