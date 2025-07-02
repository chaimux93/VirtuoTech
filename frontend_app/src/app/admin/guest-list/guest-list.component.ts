import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GenerateCardComponent } from '../dialogs/generate-card/generate-card.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddGuestComponent } from '../dialogs/add-guest/add-guest.component';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'expiration', 'actions'];
  dataSource = new MatTableDataSource<any>([
  { name: 'Mohamed T.', expiration: null },
  { name: 'Fatima Z.', expiration: null },
  { name: 'Imane A.', expiration: null },
  { name: 'Rami K.', expiration: null },
  { name: 'Sofia B.', expiration: null },
  { name: 'Hicham E.', expiration: null },
  { name: 'Nadia N.', expiration: null },
  { name: 'Youssef D.', expiration: null },
  { name: 'Samira M.', expiration: null },
  { name: 'Anas F.', expiration: null },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openGenerateCardDialog(guest: any) {
    const dialogRef = this.dialog.open(GenerateCardComponent, {
      width: '400px',
      data: guest
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        guest.expiration = result.expirationDate;
        // Add backend call here if needed
      }
    });
  }

  exportToCSV() {
  const csvRows: string[] = [];

  // Header
  csvRows.push('Nom;Expiration');

  // Rows
  this.dataSource.data.forEach(guest => {
    const name = guest.name;
    const expiration = guest.expiration ? new Date(guest.expiration).toLocaleDateString() : 'Non générée';
    csvRows.push(`${name};${expiration}`);
  });

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'guests.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

openAddGuestDialog(): void {
  const dialogRef = this.dialog.open(AddGuestComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.dataSource.data = [...this.dataSource.data, result];
      this.snackBar.open('Invité ajouté avec succès !', '', { duration: 3000 });
    }
  });
}


}
