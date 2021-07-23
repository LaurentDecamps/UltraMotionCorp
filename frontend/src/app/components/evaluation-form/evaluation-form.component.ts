import { Component, OnInit, Output } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluations';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  evaluationsAFaire: Evaluation; //= new Evaluation(-1, "", -1, "", -1, "", -1, "", , );

  // @Output

  selectedCommunication = 0;
  selectedQualite = 0;
  selectedExpertise = 0;
  // hovered = 0;
  // readonly = false;

  constructor(private evaluationService: EvaluationsService) { }

  ngOnInit(): void {
  }

  miseAJourEvaluation() {

    this.evaluationService.miseAJourEvaluation(this.evaluationsAFaire).subscribe((params) => {
    })
  }

}
