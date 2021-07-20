import { Component, Input, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { Notification } from 'src/app/models/notification';
import { Prestation } from 'src/app/models/prestation';
import { Projet } from 'src/app/models/projets';
import { DevisService } from 'src/app/services/devis.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { PrestationsService } from 'src/app/services/prestations.service';
import { ProjetsService } from 'src/app/services/projets.service';

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
    private entrepriseService: EntreprisesService,
    private projetService: ProjetsService,
    private prestationService: PrestationsService) { }

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
    let projetCourant: Projet;
    let prestationCourante: Prestation;

    this.projetService.getProjetById(this.idProjet).subscribe((data) => {
      projetCourant = data;

      this.prestationService.getPrestationById(this.idPrestation).subscribe((data) => {
        prestationCourante = data;

        let nouveauDevis: Devis = new Devis(
           "test","demandé", 0, 0, projetCourant, prestationCourante,this.idEntreprise
        )

        // L'identifiant du nouveau devis demandé
        let idNouveauDevis;

        this.devisService.addDevis(nouveauDevis).subscribe((data) => {
          this.listedevis.push(data);
          idNouveauDevis = data['_id'];

          // On crée une notification pour l'entreprise
          let notification: Notification = {
            type: "Devisdemandé",
            idDevis: idNouveauDevis,
            description: "Nouvelle demande de devis en attente",
            lue: false
          };

          this.notificationService.addNotification(notification).subscribe((nouvelleNotification) => {
            this.entreprisePreSelectionnee.notifications.push(nouvelleNotification);
            this.entrepriseService.updateEntreprise(this.entreprisePreSelectionnee).subscribe(() => { })
          });
        });
      })
    })
  }
}
