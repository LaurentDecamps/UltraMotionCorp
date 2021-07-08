import { Evaluation} from './../../models/evaluations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  evaluations : Evaluation[];

  constructor() { }

  ngOnInit(): void {
    this.evaluations.push(
      new Evaluation(5,"C'était trop bien",
      5,"C'était facile",
      5, "C'était très quali",
      5, "Des vrais experts", null, null));
  }

}
