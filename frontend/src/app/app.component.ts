import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // TODO A transférer lors de la création
  // Pour simuler une connection on stocke
  constructor() {
    localStorage.setItem('currentUser',"60e2d75c35dc14429593abd1")
  }

  title = 'UltraMotionCorp';
}
