import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // TODO A transférer lors de la création
  // Pour simuler une connection on stocke un identifiant client ou entreprise
  constructor() {
    localStorage.removeItem('clientCourant');
    localStorage.removeItem('entrepriseCourante');
    // localStorage.setItem('clientCourant',"60e2d75c35dc14429593abd1");
    localStorage.setItem('entrepriseCourante',"60e2d60135dc14429593abb8");
  }

  title = 'UltraMotionCorp';
}
