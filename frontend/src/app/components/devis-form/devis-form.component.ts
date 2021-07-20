import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Devis } from 'src/app/models/devis';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {

  @Input() devisEncours: Devis;
  @Output() miseAjourDevis = new EventEmitter<any>();
  devisForm: FormGroup;

  constructor(private fb : FormBuilder,
    private devisService : DevisService) {
    this.devisForm = this.fb.group({
      prixPrestation : [0, Validators.required],
      prixMateriel : 0,
      tempsPrestationJours : 0
    });
    console.log("Devis en cours avant modification",this.devisEncours);

  }

  ngOnInit(): void {
    this.devisForm.patchValue(this.devisEncours);
  }

  envoyerEtMettreAJourDevis(): void {
    // let nouveauDevis : Devis
    this.devisEncours.prixMateriel = this.devisForm.controls['prixMateriel'].value;
    // this.devisEncours. = this.devisForm.controls['prixPrestation'].value;
    this.devisEncours.tempsPrestationJours = this.devisForm.controls['tempsPrestationJours'].value;
    this.devisEncours.etat = "En cours";
    console.log("Devis en cours après modification",this.devisEncours);
    this.miseAjourDevis.emit(this.devisEncours);
    this.devisService.updateDevis(this.devisEncours).subscribe(() => {
      // Vider les champs de mon formulaire
      this.devisEncours = null;
    });
  }
}
