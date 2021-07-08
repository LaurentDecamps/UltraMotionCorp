import { Evaluation} from './../../models/evaluations';
import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  evaluations : Evaluation[];

  constructor(private evaluationsService : EvaluationsService ) { }

  ngOnInit(): void {
    this.evaluationsService.getEvaluationByClient(localStorage.getItem("clientCourant")).subscribe((data) => {
      this.evaluations = data;
    });

    // this.evaluations.push(
    //   new Evaluation(5,"C'était trop bien",
    //   5,"C'était facile",
    //   5, "C'était très quali",
    //   5, "Des vrais experts", null, null));
  }
}
