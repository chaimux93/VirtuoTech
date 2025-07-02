import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
})
export class AddGuestComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddGuestComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}

