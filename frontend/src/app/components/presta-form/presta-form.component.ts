import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prestation } from 'src/app/models/prestation';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-presta-form',
  templateUrl: './presta-form.component.html',
  styleUrls: ['./presta-form.component.css']
})
export class PrestaFormComponent implements OnInit {

  @Output() ajouterprestation = new EventEmitter<any>();
  prestationGroupForm : FormGroup;

  constructor(private entrepriseService: EntreprisesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.prestationGroupForm = this.formBuilder.group({
      typePrestation: "",
      description: "",
      tauxHoraire: NaN,
      TVA: ""
    });
  }

  ajouterPrestation() {
    let prestationAAjouter : Prestation = new Prestation(this.prestationGroupForm.get("typePrestation").value,
    this.prestationGroupForm.get("description").value,
      this.prestationGroupForm.get("tauxHoraire").value,
      this.prestationGroupForm.get("TVA").value
    );
    console.log("Prestation", prestationAAjouter);
    this.ajouterprestation.emit(prestationAAjouter);
  }

}
