import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idConnexion : String | null;
  compteEntreprise : boolean = false;
  compteClient : boolean = false;
  compteAdmin : boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.idConnexion = localStorage.getItem('clientCourant');
    // Si on a pas de client Courant on essaie de
    if (this.idConnexion) {
      this.compteClient = true;
    }
    else {
      this.idConnexion = localStorage.getItem('entrepriseCourante');
      if (this.idConnexion){
        this.compteEntreprise = true;
      }
    }
  }
}
