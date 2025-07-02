import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-card',
  templateUrl: './assign-card.component.html'
})
export class AssignCardComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public user: any,
    private dialogRef: MatDialogRef<AssignCardComponent>
  ) {}

  assignCard() {
    this.dialogRef.close(true);  // return `true` to update user
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
