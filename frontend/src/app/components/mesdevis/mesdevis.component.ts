import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { DevisService } from 'src/app/services/devis.service';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-mesdevis',
  templateUrl: './mesdevis.component.html',
  styleUrls: ['./mesdevis.component.css']
})
export class MesdevisComponent implements OnInit {

  listeDevis : Devis[] = Devis[0];

  idConnexion: string;
  compteEntreprise: boolean = false;
  compteClient: boolean = false;
  compteAdmin: boolean = false;
  entrepriseConnectee: Entreprise;
  clientconnecte: Client;
  devisEnCours: Devis;
  formulaireIsVisible: boolean;

  @Output() creerEvaluationAFaire = new EventEmitter<any>();

  constructor(private devisService: DevisService,
    private evaluationService: EvaluationsService) { }

  ngOnInit(): void {
    this.idConnexion = JSON.parse(localStorage.getItem('entrepriseCourante'))?.entreprise.id;
    this.devisService.getDevisByEntreprise(this.idConnexion).subscribe((data) => {
      this.listeDevis = data;
      // this.devisDemandes = this.listeDevis.filter(devis => devis.etat === "demandé");
    })
  }

  selectionDevis(devisSelectionne : Devis) {
    console.log("Devis selectionné pour mise à jour", devisSelectionne);
    this.formulaireIsVisible = true;
    this.devisEnCours = devisSelectionne;
  }

  miseAjourDevis = (devis) => {
    console.log("Devis remonté du formulaire", devis);
    this.formulaireIsVisible = false;
    this.devisEnCours = devis;
  }

  envoyerDevis = (devisEnCours) => {
    devisEnCours.etat = "A valider";
    this.devisService.updateDevis(devisEnCours).subscribe((devisMisAJour) => {
      this.devisEnCours = devisMisAJour;
    });
    // this.creerEvaluationAFaire.emit(this.devisEnCours.prestation);
  }

  estDevisDemande = (devis) => {
    return devis.etat == "A valider";
  }
}
