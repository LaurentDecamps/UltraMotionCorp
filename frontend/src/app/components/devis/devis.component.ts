import { Component, Input, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { Notification } from 'src/app/models/notification';
import { DevisService } from 'src/app/services/devis.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  devisCourant: Devis;
  entreprisePreSelectionnee: Entreprise;
  notificationALEntreprise: Notification;

  @Input() idProjet: string;
  @Input() idPrestation: string;
  @Input() idEntreprise: string;

  listedevis: Devis[] = Devis[0];

  constructor(private devisService: DevisService,
    private notificationService: NotificationsService,
    private entrepriseService: EntreprisesService) { }

  ngOnInit(): void {
    console.log(`ID projet du ${this.idProjet}`);
    console.log(`ID prestation du ${this.idPrestation}`);
    console.log(`ID entreprise du ${this.idEntreprise}`);

    this.devisService.getDevisByProjetByPrestation(this.idProjet, this.idPrestation).subscribe((data) => {
      console.log(this.listedevis);
      this.listedevis = data;
    });

    this.entrepriseService.findById(this.idEntreprise).subscribe((data) => {
      console.log(`Entreprise récupérée ${this.entreprisePreSelectionnee}`);
      this.entreprisePreSelectionnee = data;
    });
  }

  demanderDevis() {
    let nouveauDevis: Devis = {
      titre: "test",
      etat: "demandé",
      tempsPrestationJours: 0,
      prixMateriel: 0,
      projet: this.idProjet,
      prestation: this.idPrestation,
      entreprise: this.idEntreprise
    }

    let idNouveauDevis;

    this.devisService.addDevis(nouveauDevis).subscribe((data) => {
      console.log(data);
      this.listedevis.push(data);
      idNouveauDevis = data['_id'];

      // On crée une notification pour l'entreprise
      let notification: Notification = {
        type: "Devisdemandé",
        idDevis: idNouveauDevis,
        description: "Nouvelle demande de devis",
        lue: false
      };

      this.notificationService.addNotification(notification).subscribe((nouvelleNotification) => {
        this.entreprisePreSelectionnee.notifications.push(nouvelleNotification);
        console.log(`Entreprise Pré sélectionnée : `, this.entreprisePreSelectionnee);
        this.entrepriseService.updateEntreprise(this.entreprisePreSelectionnee).subscribe((entrepriseMiseAJour) => {
          console.log(entrepriseMiseAJour);
        })
      });
    });


  }
}
