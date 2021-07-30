import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/messageModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }

  sentMessage(){
    return this.http.get(`${this.URL}safety/user/sent`);
  };

  receivedMessage(){
    return this.http.get(`${this.URL}safety/user/received`);
  }
  newMessage(message: Message){
    return this.http.post(`${this.URL}safety/user/sent`,{message});
  }


}
