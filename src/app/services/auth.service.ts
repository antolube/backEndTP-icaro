import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

const AUTH_API = 'http://localhost:3000/api/v1/safety/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user_name: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      user_name,
      password
    }, httpOptions);
  }

  register(user:User): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      user_name:user.name,
      name:user.name,
      last_name:user.last_name,
      email:user.email,
      password:user.password,
      country:user.country,
      city:user.city
    }, httpOptions);
  }
}
