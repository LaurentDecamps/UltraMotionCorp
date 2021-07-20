import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Entreprise } from 'src/app/models/entreprise';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.css']
})
export class NotifsComponent implements OnInit {

  idConnexion: string;
  compteEntreprise: boolean = false;
  compteClient: boolean = false;
  compteAdmin: boolean = false;
  entrepriseConnectee: Entreprise;
  clientconnecte: Client;

  constructor(
    private entreprisesService: EntreprisesService,
    private clientsService: ClientService) { }

  ngOnInit(): void {

    // TODO transférer cette récupération de donnée dans un service
    this.idConnexion = localStorage.getItem('clientCourant');

    if (this.idConnexion) {
      this.compteClient = true;
    }
    else { // Si on a pas de client Courant on essaie de récupérer l'entreprise courante
      this.idConnexion = localStorage.getItem('entrepriseCourante');
      if (this.idConnexion) {
        this.compteEntreprise = true;
      }
    }

    if (this.compteEntreprise) {
      this.entreprisesService.findById(this.idConnexion).subscribe((data) => {
        this.entrepriseConnectee = data;
      });
    }
    else {
      this.clientsService.findById(this.idConnexion).subscribe((data) => {
        this.clientconnecte = data;
      });
    }
  }
}
