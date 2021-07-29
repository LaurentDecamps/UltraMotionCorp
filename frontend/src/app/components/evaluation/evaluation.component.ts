import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evaluation } from 'src/app/models/evaluations';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  evaluationsCourante : Evaluation;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
  }

  transmettreDemandeEvaluation(evaluationsATransmettre : Evaluation)  {
    // console.log("Evaluation a transmettre", evaluationsATransmettre);
    this.evaluationsCourante = evaluationsATransmettre;
    // console.log("Evaluation transmise",this.evaluationsCourante);
  }
}
