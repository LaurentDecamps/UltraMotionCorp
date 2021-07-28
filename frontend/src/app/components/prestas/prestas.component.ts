import { Component, Input, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/models/entreprise';
import { Prestation } from 'src/app/models/prestation';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { PrestationsService } from 'src/app/services/prestations.service';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  entrepriseCourante: Entreprise;

  private _prestationAAjouter: Prestation;

  @Input() set prestationAAjouter (value: Prestation) {
    this._prestationAAjouter = value;
    console.log("Set prestationAAjouter", value);
    if (value) {
      this.prestationService.create(value).subscribe((prestationMAJ) => {
        this.entrepriseCourante.prestations.push(prestationMAJ);
        console.log("prestationMAJ",prestationMAJ);
        this.entrepriseService.updateEntreprise(this.entrepriseCourante).subscribe();
      })
    }
  }

  constructor(private entrepriseService: EntreprisesService,
    private authentificationService: AuthentificationService,
    private prestationService: PrestationsService) {
      
    }

  ngOnInit(): void {
    this.entrepriseService.findById(this.authentificationService.currentEntrepriseValue.entreprise.id).subscribe((entreprise) => {
      this.entrepriseCourante = entreprise;
      console.log("Entreprise courante", entreprise);

    });
  }

}
