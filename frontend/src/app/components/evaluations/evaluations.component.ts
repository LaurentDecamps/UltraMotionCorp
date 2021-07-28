import { Evaluation } from './../../models/evaluations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EvaluationsService } from 'src/app/services/evaluations.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css'],
})
export class EvaluationsComponent implements OnInit {
  evaluations: Evaluation[];
  evaluationsFaites: Evaluation[];
  evaluationsAFaire: Evaluation[];

  @Output() transmettreDemandeEvaluation = new EventEmitter<any>();

  constructor(private evaluationsService: EvaluationsService,
    private authentificationService: AuthentificationService) {}

  ngOnInit(): void {

    this.evaluationsService
      .getEvaluationByClient(this.authentificationService.currentClientValue?.client.id)
      .subscribe((data) => {
        this.evaluations = data;
        console.log(this.evaluations);

        // Les évaluations à faire son
        this.evaluationsAFaire = this.evaluations.filter((evaluation) => {
          evaluation.noteGlobale === 0
        })

        console.log(this.evaluationsAFaire);


        this.evaluationsFaites = this.evaluations.filter((evaluation) => evaluation.noteGlobale !== 0 )

        console.log(this.evaluationsFaites);

      });
  }

  evaluer(evaluation : Evaluation){
    this.transmettreDemandeEvaluation.emit(evaluation);
  }
}
