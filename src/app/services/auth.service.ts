import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }


login(user_name: string, password: string){
  return this.http.post(`${this.URL}safety/singin`,{user_name,password});
}

register(user: User){
  return this.http.post(`${this.URL}safety/singup`,user);
}

}
