import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { exportToCSV } from '../utils';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUserComponent } from '../dialogs/add-user/add-user.component';
import { AssignCardComponent } from '../dialogs/assign-card/assign-card.component';
import { ViewCardComponent } from '../dialogs/view-card/view-card.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {

@ViewChild(MatSort) sort!: MatSort;

constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

users = [
  { id: 1, name: 'Mehdi Illilou', role: 'Élève', card: 'Assigned' },
  { id: 2, name: 'Yassine B.', role: 'Professeur', card: 'None' },
  { id: 3, name: 'Aya K.', role: 'Élève', card: 'Assigned' },
  { id: 4, name: 'Salma R.', role: 'Élève', card: 'Assigned' },
  { id: 5, name: 'Tariq L.', role: 'Professeur', card: 'Assigned' },
  { id: 6, name: 'Nada M.', role: 'Élève', card: 'None' },
  { id: 7, name: 'Khalid S.', role: 'Professeur', card: 'Assigned' },
  { id: 8, name: 'Sara B.', role: 'Élève', card: 'Assigned' },
  { id: 9, name: 'Rachid A.', role: 'Élève', card: 'None' },
  { id: 10, name: 'Lina C.', role: 'Élève', card: 'Assigned' },
];


displayedColumns: string[] = ['name', 'role', 'card', 'actions'];
dataSource = new MatTableDataSource(this.users);

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;

  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
downloadCSV() {
  exportToCSV(this.users, 'liste_utilisateurs.csv');
}

openAddUserDialog() {
  const dialogRef = this.dialog.open(AddUserComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.users.push({
        ...result,
        card: 'None'  
      });
      this.dataSource.data = [...this.users];  
      this.snackBar.open('Utilisateur ajouté', 'Fermer', { duration: 3000 });
    }
  });
}


openAssignCardDialog(user: any) {
  const dialogRef = this.dialog.open(AssignCardComponent, { data: user });
  dialogRef.afterClosed().subscribe(confirmed => {
    if (confirmed) {
      user.card = 'Assigned';
      this.snackBar.open('Carte assignée', 'Fermer', { duration: 3000 });
    }
  });
}

openCardDetailsDialog(user: any) {
  this.dialog.open(ViewCardComponent, { data: user });
}

}
