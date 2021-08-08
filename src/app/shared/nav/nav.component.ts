import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
// import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
// import { UserService } from 'src/app/services/user.service';
// import { Router} from '@angular/router';
import { TokenStorageService} from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn = false;
  user_name:any ="";

  constructor(

    private _tokenStorage: TokenStorageService

  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this._tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this._tokenStorage.username();
      this.user_name = user;
    }
  }


  logOut(): void {
    this._tokenStorage.singOut();
    window.location.reload();

  }

}


