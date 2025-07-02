import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PresenceStatusComponent } from './presence-status/presence-status.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { GuestListComponent } from './guest-list/guest-list.component';

const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'user-list', component: UserListComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'presence-status', component: PresenceStatusComponent },
      { path: 'guest-list', component: GuestListComponent },
      { path: '', redirectTo: 'user-list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
