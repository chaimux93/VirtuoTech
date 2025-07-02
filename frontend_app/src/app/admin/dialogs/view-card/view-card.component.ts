import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html'
})
export class ViewCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public user: any) {}
}
