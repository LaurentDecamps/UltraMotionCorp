import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { Evaluation } from 'src/app/models/evaluations';
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
  projetCourant: Projet;
  prestationCourante: Prestation;

  @Input() idProjet: string;
  @Input() idPrestation: string;
  @Input() idEntreprise: string;
  @Output() creerEvaluationAFaire = new EventEmitter<any>();

  listedevis: Devis[];

  constructor(private devisService: DevisService,
    private notificationService: NotificationsService,
    private entrepriseService: EntreprisesService,
    private projetService: ProjetsService,
    private prestationService: PrestationsService,) { }

  ngOnInit(): void {
    // console.log(`ID projet du ${this.idProjet}`);
    // console.log(`ID prestation du ${this.idPrestation}`);
    // console.log(`ID entreprise du ${this.idEntreprise}`);

    // Récupération du devis à partir des trois
    this.devisService.getDevisByProjetByPrestationByEntreprise(this.idProjet, this.idPrestation, this.idEntreprise).subscribe((data) => {
      // console.log("Devis récupéré", data);
      this.listedevis = data;
    });

    this.entrepriseService.findById(this.idEntreprise).subscribe((data) => {
      this.entreprisePreSelectionnee = data;
      // console.log(`Entreprise récupérée ${this.idEntreprise}`, data);
    });

    this.projetService.getProjetById(this.idProjet).subscribe((data) => {
      this.projetCourant = data;
    })

    this.prestationService.getPrestationById(this.idPrestation).subscribe((data) => {
      this.prestationCourante = data;
    })
  }

  testerDevisAValider(devis: Devis) {
    return devis.etat === "A valider";
  }

  refuserDevis = (devis: Devis) => {
    devis.etat = "refusé";
    this.devisService.updateDevis(devis).subscribe(() => { })
  }

  validerDevis(devis: Devis) {
    devis.etat = "validé";

    let evaluation: Evaluation = new Evaluation(0,
      0,
      0,
      0,
      "A faire",
      "A faire",
      "A faire",
      "A faire",
      null,
      this.prestationCourante
    );

    this.devisService.updateDevis(devis).subscribe(() => {
      this.creerEvaluationAFaire.emit(evaluation);
    });
  }

  demanderDevis() {
    let nouveauDevis = {
      titre: this.projetCourant.description + " " + this.prestationCourante.description + " " + this.entreprisePreSelectionnee.nom,
      etat: "demandé",
      tempsPrestationJours: 0,
      prixMateriel: 0,
      prixPrestation: 0,
      projet: this.projetCourant,
      prestation: this.prestationCourante,
      entreprise: this.entreprisePreSelectionnee
    };


    // L'identifiant du nouveau devis demandé
    let idNouveauDevis;

    this.devisService.addDevis(nouveauDevis).subscribe((nouveaudevisBDD) => {
      this.listedevis.push(nouveaudevisBDD);
      idNouveauDevis = nouveaudevisBDD['_id'];

      // On crée une notification pour l'entreprise
      let notification: Notification = new Notification("Devisdemandé", "Nouvelle demande de devis en attente",false, nouveaudevisBDD);

      this.notificationService.addNotification(notification).subscribe((nouvelleNotification) => {
        this.entreprisePreSelectionnee.notifications.push(nouvelleNotification);
        this.entrepriseService.updateEntreprise(this.entreprisePreSelectionnee).subscribe((data) => {
          // console.log("Entreprise avec nouvelle notification non lue",data);

         })
      });
    });
  }
}
