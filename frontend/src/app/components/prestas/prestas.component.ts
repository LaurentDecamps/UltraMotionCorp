import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestation';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  prestations : Prestation;

  constructor(private entrepriseService : EntreprisesService) { }

  ngOnInit(): void {
  }

}
