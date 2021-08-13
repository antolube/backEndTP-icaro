import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { ReceivedMessageComponent } from './received-message/received-message.component';
import { SentMessageComponent } from './sent-message/sent-message.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'sent', component:SentMessageComponent, canActivate:[AuthGuard]},
  {path:'received', component:ReceivedMessageComponent, canActivate:[AuthGuard]},
  {path:'new', component:NewMessageComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
