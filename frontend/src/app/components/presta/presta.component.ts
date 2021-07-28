import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestation';

@Component({
  selector: 'app-presta',
  templateUrl: './presta.component.html',
  styleUrls: ['./presta.component.css']
})
export class PrestaComponent implements OnInit {

  prestationAAjouter : Prestation;

  constructor() { }

  ngOnInit(): void {

  }

  ajouterprestation(prestationAAjouter : Prestation){
    // console.log("Prestation passé au père", prestationAAjouter);

    this.prestationAAjouter = prestationAAjouter;
  }

}
