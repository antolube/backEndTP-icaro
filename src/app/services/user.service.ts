import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/messageModel';
import { User } from '../models/userModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }

  sentMessage(){
    return this.http.get<Message>(`${this.URL}users/sentmsg`);
  };

  receivedMessage(){
    return this.http.get<Message>(`${this.URL}users/receivedmsg`);
  }
  newMessage(msg: any){
    return this.http.post(`${this.URL}users/newmsg`,msg);
  }

  getDiary(){
    return this.http.get<{user_name: string,id_user:number}>(`${this.URL}users/diary`);
  }


}
