import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private URL = 'http://localhost:3000/api/v1/';
  private ID = this._tokenStorage.userId();
  private EMAIL = this._tokenStorage.userEmail();

  constructor(
    private http: HttpClient,
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


  updatedMsg(id: number,data:any) {
    return this.http.put(`${this.URL}users/deleted${id}`,data);
  }
    // Update
  // updateBook(id:any, data:any): Observable<any> {
  //     let API_URL = `${this.REST_API}/update-book/${id}`;
  //     return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
  //       .pipe(
  //         catchError(this.handleError)
  //       )
  //   }


}
