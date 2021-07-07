import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Entreprise } from 'src/app/models/entreprise';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  idConnexion: String | null;
  compteEntreprise: boolean = false;
  compteClient: boolean = false;
  compteAdmin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.idConnexion = localStorage.getItem('clientCourant');
    // Si on a pas de client Courant on essaie de
    if (this.idConnexion) {
      this.compteClient = true;
    }
    else {
      this.idConnexion = localStorage.getItem('entrepriseCourante');
      if (this.idConnexion) {
        this.compteEntreprise = true;
      }
    }
  }
}
