import { evaluation } from './../../models/evaluations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  evaluations : evaluation[];

  constructor() { }

  ngOnInit(): void {
  }

}
