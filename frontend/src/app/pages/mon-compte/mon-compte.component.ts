import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  nbNotification: number;

  constructor(
    public authentificationService: AuthentificationService,
    private clientService: ClientService,
    private entrepriseService: EntreprisesService) { }

  ngOnInit(): void {
    if (this.authentificationService.isClientConnect) {
      this.clientService.findById(this.authentificationService.currentClientValue?.client.id).subscribe(
        (client) => {
          this.nbNotification = client.notifications.filter((notification) => notification.lue == false).length;
        })
    }
    else if (this.authentificationService.isEntrepriseConnect) {
      this.entrepriseService.findById(this.authentificationService.currentEntrepriseValue?.entreprise.id).subscribe(
        (entreprise) => {
          // let notifications
          this.nbNotification = entreprise.notifications.filter((notification) => notification.lue == false).length;
        })
    }
  }
}
