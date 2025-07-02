import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
alerts = [
  { id: 1, type: 'Double scan', user: 'Ali M.', time: '10:05' },
  { id: 2, type: 'Scan invalide', user: 'Yasmine K.', time: '10:20' },
  { id: 3, type: 'Carte expirée', user: 'Salma R.', time: '09:50' },
  { id: 4, type: 'Accès refusé', user: 'Rachid A.', time: '11:10' },
  { id: 5, type: 'Scan invalide', user: 'Nada M.', time: '11:25' },
  { id: 6, type: 'Double scan', user: 'Lina C.', time: '08:40' },
];
}
