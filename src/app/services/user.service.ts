import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/messageModel';
import { User } from '../models/userModel';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api/v1/';
  // private ID = this._authService.userId();
  private ID = this._tokenStorage.userId();

  constructor(
    private http: HttpClient,
    // private _authService: AuthService
    private _tokenStorage: TokenStorageService,
  ) { }
  sentMessage(){
    return this.http.get(`${this.URL}users/sentmsg?id_user=${this.ID}`);
  };

  receivedMessage(){
    console.log("estoy enviando este dato ala base datos:"+JSON.parse(this.ID));
    return this.http.get(`${this.URL}users/receivedmsg?id_user=${this.ID}`);
  }
  newMessage(msg: any){
    return this.http.post(`${this.URL}users/newmsg`,msg);
  }

  getDiary(){
    return this.http.get<{user_name: string,id_user:number}>(`${this.URL}users/diary`);
  }



}
