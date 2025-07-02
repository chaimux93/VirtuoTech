import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PresenceStatusComponent } from './presence-status/presence-status.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { LayoutComponent } from './layout/layout.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { AssignCardComponent } from './dialogs/assign-card/assign-card.component';
import { ViewCardComponent } from './dialogs/view-card/view-card.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GenerateCardComponent } from './dialogs/generate-card/generate-card.component';
import { AddGuestComponent } from './dialogs/add-guest/add-guest.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UserListComponent,
    AlertsComponent,
    PresenceStatusComponent,
    GuestCardComponent,
    LayoutComponent,
    AddUserComponent,
    AssignCardComponent,
    ViewCardComponent,
    GuestListComponent,
    GenerateCardComponent,
    AddGuestComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    

  ]
})
export class AdminModule { }
