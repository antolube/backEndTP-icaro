import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ReceivedMessageComponent } from './received-message/received-message.component';
import { SentMessageComponent } from './sent-message/sent-message.component';


@NgModule({
  declarations: [
    DashboardComponent,

    ReceivedMessageComponent,
    SentMessageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
