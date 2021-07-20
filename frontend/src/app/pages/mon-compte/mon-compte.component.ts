import { Component, OnInit } from '@angular/core';
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

  idConnexion: string | null;
  compteEntreprise: boolean = false;
  compteClient: boolean = false;
  compteAdmin: boolean = false;

  constructor(
    private entreprisesService: EntreprisesService,
    private clientsService: ClientService) { }

  ngOnInit(): void {

    this.idConnexion = localStorage.getItem('clientCourant');

    if (this.idConnexion) {
      this.compteClient = true;
    }
    else { // Si on a pas de client courant on essaie de récupérer l'entreprise courante
      this.idConnexion = localStorage.getItem('entrepriseCourante');
      if (this.idConnexion) {
        this.compteEntreprise = true;
      }
    }
  }
}
