import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestation';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  private _prestationAAjouter: Prestation;

  @Input() set prestationAAjouter (value: Prestation) {
    this._prestationAAjouter = value;
    console.log("Set prestationAAjouter", value);
    this.prestations.push(value);
  }

  prestations: Prestation[];

  constructor(private entrepriseService: EntreprisesService,
    private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.entrepriseService.findById(this.authentificationService.currentEntrepriseValue).subscribe((entreprise) => {
      this.prestations = entreprise.prestations;
    });
  }

}
