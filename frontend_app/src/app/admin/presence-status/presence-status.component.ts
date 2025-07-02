import { Component } from '@angular/core';

@Component({
  selector: 'app-presence-status',
  templateUrl: './presence-status.component.html',
  styleUrls: ['./presence-status.component.css']
})
export class PresenceStatusComponent {
presenceList = [
  { name: 'Mehdi Illilou', status: 'Présent' },
  { name: 'Aya K.', status: 'Absent' },
  { name: 'Yassine B.', status: 'Présent' },
  { name: 'Salma R.', status: 'Absent' },
  { name: 'Tariq L.', status: 'Présent' },
  { name: 'Nada M.', status: 'Absent' },
  { name: 'Khalid S.', status: 'Présent' },
  { name: 'Sara B.', status: 'Présent' },
  { name: 'Rachid A.', status: 'Absent' },
  { name: 'Lina C.', status: 'Présent' },
];


}
