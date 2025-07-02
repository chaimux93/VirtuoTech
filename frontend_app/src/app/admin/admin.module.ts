import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PresenceStatusComponent } from './presence-status/presence-status.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    UserListComponent,
    AlertsComponent,
    PresenceStatusComponent,
    GuestCardComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
