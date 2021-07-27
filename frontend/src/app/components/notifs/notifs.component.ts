import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Entreprise } from 'src/app/models/entreprise';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { NotificationsService } from 'src/app/services/notifications.service';

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
    private clientsService: ClientService,
    private authentificationService : AuthentificationService,
    private notificationService: NotificationsService) { }

  ngOnInit(): void {

    // TODO transférer cette récupération de donnée dans un service
    this.idConnexion = this.authentificationService.currentClientValue?.client?.id;

    if (this.idConnexion) {
      this.compteClient = true;
    }
    else { // Si on a pas de client Courant on essaie de récupérer l'entreprise courante
      this.idConnexion = this.authentificationService.currentEntrepriseValue?.entreprise.id;
      if (this.idConnexion) {
        this.compteEntreprise = true;
      }
    }

    if (this.compteEntreprise) {
      this.entreprisesService.findById(this.idConnexion).subscribe((data) => {
        this.entrepriseConnectee = data;
        this.entrepriseConnectee.notifications = this.entrepriseConnectee.notifications.filter((notification) => {return notification.lue == false})
        this.entrepriseConnectee.notifications.forEach(notification => {
          notification.lue = true;
          this.notificationService.update(notification).subscribe();
        });
      });
    }
    else {
      this.clientsService.findById(this.idConnexion).subscribe((data) => {
        this.clientconnecte = data;
      });
    }
  }
}
