import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Devis } from 'src/app/models/devis';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {

  private _devisEncours: Devis;

  @Input() set devisEncours(value: Devis) {
    this._devisEncours = value;
    console.log("Set devis en cours");
    this.devisForm.patchValue(this._devisEncours);
  }

  get devisEncours(): Devis {
    return this._devisEncours;
  }

  @Input() formulaireIsVisible = false;

  @Output() miseAjourDevis = new EventEmitter<any>();
  devisForm: FormGroup;

  constructor(private fb : FormBuilder,
    private devisService : DevisService) {
    this.devisForm = this.fb.group({
      prixPrestation : [NaN, Validators.required],
      prixMateriel : [0, Validators.required],
      tempsPrestationJours : [1, Validators.required],
    });
    console.log("Devis en cours avant modification",this.devisEncours);
  }

  ngOnInit(): void {
  }

  envoyerEtMettreAJourDevis(): void {
    this.devisEncours.prixPrestation = this.devisForm.controls['prixPrestation'].value;
    this.devisEncours.prixMateriel = this.devisForm.controls['prixMateriel'].value;
    this.devisEncours.tempsPrestationJours = this.devisForm.controls['tempsPrestationJours'].value;
    // this.devisEncours.etat = "A valider";
    console.log("Devis en cours après modification",this.devisEncours);
    this.devisService.updateDevis(this.devisEncours).subscribe((devisMisAJour) => {
      console.log("Devis en cours après maj BDD", devisMisAJour);
      this.miseAjourDevis.emit(devisMisAJour);
    });
  }
}
