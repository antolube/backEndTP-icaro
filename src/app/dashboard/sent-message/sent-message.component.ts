import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent implements OnInit {

  msg: any =[];

  displayedColumns: string[] = ['remitente', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;

  constructor(private _userService: UserService,) { }

  ngOnInit(): void {
    this._userService.sentMessage().subscribe(data =>{
    console.log(JSON.stringify(data));
    this.msg = data;
    this.dataSource =  new MatTableDataSource(this.msg);
    });

  }

  cargarMensajes(){
  }

  eliminarMensaje(index: number){
    // this._messagesService.eliminarMensaje(index);
    // console.log(index);
    this.cargarMensajes();
  }

}
