import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { Router} from '@angular/router';
// import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent implements OnInit {


  msg: any =[];

  deleted:any ={
    id_message: 'number',
    updatedMsg: 'string',
  };

  displayedColumns: string[] = ['destinatario', 'fecha', 'mensaje', 'acciones'];

  dataSource!:MatTableDataSource<any>;


  constructor(private _userService: UserService,private router:Router) { }


  ngOnInit(): void {
    this._userService.sentMessage().subscribe(data =>{
      console.log(JSON.stringify(data));
      this.msg = data;
      this.dataSource =  new MatTableDataSource(this.msg);
    });
  }

  cargarMensajes(){
    this._userService.sentMessage().subscribe(data =>{
      console.log(JSON.stringify(data));
      this.msg = data;
      this.dataSource =  new MatTableDataSource(this.msg);
    });
  }

  updatedMsg(id_message:number){

    console.log(id_message);

    this.deleted = {
      updatedMsgSent: 0 ,//paso a elminado de las lista de enviados
      // updatedMsgReceided: undefined,
    };
    this._userService.updatedMsg(id_message,this.deleted).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de enviados"+JSON.stringify(data));
    })

    this.cargarMensajes();
    // window.location.reload();
  }

}
