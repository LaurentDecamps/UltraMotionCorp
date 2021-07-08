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
      this.evaluations.push(
      new Evaluation(4,"Je suis plutôt satisfaite de leur intervention, mais sincèrement ça aurait pu être mieux, ils ont dépassés les délais",
      5,"C'était très facile d'échanger avec eux sincèrement ils ont été très à l'écoute",
      4, "Je ne suis pas certains de la qualité des matériaux utilisés à voir sur le long terme",
      3, "Il restait beaucoup de ménage à faire après leur passage, je pensais qu'il rendrait le chantier propre c'est un point plutôt négatif je trouve", null, null));
      this.evaluations.push(
     new Evaluation(2,"De vrais incompétents",
       1,"Immonde, une vraie honte",
       2, "On a du refaire appel à d'autres artisans",
       0, "Diplôme en pochette surprise", null, null));


  }

}
