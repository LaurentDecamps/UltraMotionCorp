import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idConnexion : String | null;
  compteEntrepriseConnecte : boolean = false;
  compteClientConnecte : boolean = false;
  compteAdmin : boolean = false;

  constructor(public authenticationService : AuthentificationService) { }

  ngOnInit(): void {

    this.idConnexion = JSON.parse(localStorage.getItem('clientCourant')).client.id;
    // Si on a pas de client Courant on essaie de
    if (this.idConnexion) {
      this.compteClientConnecte = true;
    }
    else {
      this.compteClientConnecte = false;
      this.idConnexion = JSON.parse(localStorage.getItem('entrepriseCourante')).entreprise.id;
      if (this.idConnexion){
        this.compteEntrepriseConnecte = true;
      }else{
        this.compteEntrepriseConnecte = false;
      }
    }
  }
}
