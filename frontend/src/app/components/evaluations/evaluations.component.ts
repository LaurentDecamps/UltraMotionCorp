import { Evaluation } from './../../models/evaluations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EvaluationsService } from 'src/app/services/evaluations.service';

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

  constructor(private evaluationsService: EvaluationsService) {}

  ngOnInit(): void {
    this.evaluationsService
      .getEvaluationByClient(localStorage.getItem('clientCourant'))
      .subscribe((data) => {
        this.evaluations = data;
      });
  }

  evaluer(evaluation : Evaluation){
    this.transmettreDemandeEvaluation.emit(evaluation);
  }
}
