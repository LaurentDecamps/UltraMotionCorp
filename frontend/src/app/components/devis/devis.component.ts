import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { Evaluation } from 'src/app/models/evaluations';
import { Notification } from 'src/app/models/notification';
import { Prestation } from 'src/app/models/prestation';
import { Projet } from 'src/app/models/projets';
import { DevisService } from 'src/app/services/devis.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { EvaluationsService } from 'src/app/services/evaluations.service';
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
    console.log(`ID projet du ${this.idProjet}`);
    console.log(`ID prestation du ${this.idPrestation}`);
    console.log(`ID entreprise du ${this.idEntreprise}`);

    this.devisService.getDevisByProjetByPrestation(this.idProjet, this.idPrestation).subscribe((data) => {
      console.log("Devis récupéré", data);
      this.listedevis = data;
    });

    this.entrepriseService.findById(this.idEntreprise).subscribe((data) => {
      console.log(`Entreprise récupérée ${this.entreprisePreSelectionnee}`);
      this.entreprisePreSelectionnee = data;
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
    console.log("Devis validé", devis);
    this.devisService.updateDevis(devis).subscribe(() => {
      this.creerEvaluationAFaire.emit(this.prestationCourante);
    });

  }

  demanderDevis() {
    let nouveauDevis: Devis = new Devis(
      "test", "demandé", 0, 0, this.projetCourant, this.prestationCourante, this.entreprisePreSelectionnee
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
  }
}
