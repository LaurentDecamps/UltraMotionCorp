import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { Evaluation } from 'src/app/models/evaluations';
import { Prestation } from 'src/app/models/prestation';
import { ClientService } from 'src/app/services/client.service';
import { DevisService } from 'src/app/services/devis.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  clientConnecte: Client;
  idEntrepriseSelectionnee: string = "60e2d60135dc14429593abb8";

  entreprisePreSelectionnee: Entreprise;

  constructor(private clientService: ClientService,
    private evaluationService: EvaluationsService,
    private entrepriseService: EntreprisesService) { }

  ngOnInit(): void {
    this.clientService.findById(localStorage.getItem('clientCourant')).subscribe((data) => {
      this.clientConnecte = data;
    });

    this.entrepriseService.findById(this.idEntrepriseSelectionnee).subscribe((data) => {
      this.entreprisePreSelectionnee = data;
    })
  }

  creerEvaluationAFaire = (evaluationAFaire: Evaluation) => {
    evaluationAFaire.client = this.clientConnecte;
    console.log("Je suis remonté aux projet ", evaluationAFaire);
    this.evaluationService.createEvaluation(evaluationAFaire).subscribe(() => { });
  }
}
