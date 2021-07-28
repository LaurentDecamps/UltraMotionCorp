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
    // console.log("Client",this.authentificationService.currentClientValue.client.id);

    this.evaluationsService
      .getEvaluationByClient(this.authentificationService.currentClientValue?.client.id)
      .subscribe((data) => {
        this.evaluations = data;
      });
  }

  evaluer(evaluation : Evaluation){
    this.transmettreDemandeEvaluation.emit(evaluation);
  }
}
