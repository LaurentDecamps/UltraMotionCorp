import { Component, OnInit } from '@angular/core';
import { Prestations } from 'src/app/models/prestations';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  prestations : Prestations;

  constructor(private entrepriseService : EntreprisesService) { }

  ngOnInit(): void {
  }

}
