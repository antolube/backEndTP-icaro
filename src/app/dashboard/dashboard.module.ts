import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ReceivedMessageComponent } from './received-message/received-message.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { NewMessageComponent } from './new-message/new-message.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ReceivedMessageComponent,
    SentMessageComponent,
    NewMessageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
