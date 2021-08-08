import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { MaterialModule } from './material/material.module';

//providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { authInterceptorProviders } from './services/auth-interceptor.service';
// import { TokenStorageService } from './services/token-storage.service';
@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    //jwt
    {
     provide: JWT_OPTIONS ,
     useValue: JWT_OPTIONS
    },
    JwtHelperService,
    //Interceptor
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: TokenInterceptorService,
      multi: true
     },
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
