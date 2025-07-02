import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-card',
  templateUrl: './generate-card.component.html',
  styleUrls: ['./generate-card.component.scss']
})
export class GenerateCardComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GenerateCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      expirationDate: ['']
    });
  }

  generate() {
    this.dialogRef.close(this.form.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
