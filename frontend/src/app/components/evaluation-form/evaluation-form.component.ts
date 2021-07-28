import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Evaluation } from 'src/app/models/evaluations';
import { EvaluationsService } from 'src/app/services/evaluations.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  @Input() evaluationsAFaire: Evaluation;

  evaluationForm: FormGroup;

  // @Output

  selectedCommunication = 0;
  selectedQualite = 0;
  selectedExpertise = 0;
  noteQualiteMoyenne = () => {
    return this.selectedCommunication + this.selectedQualite + this.selectedExpertise;
  }

  // hovered = 0;
  // readonly = false;

  constructor(private fb: FormBuilder,
    private evaluationService: EvaluationsService) {
    this.evaluationForm = this.fb.group({
      noteGlobale: 0,
      noteFacilite: 0,
      noteQualite: 0,
      noteExpertise: 0,
      commentaireExpertise: "",
      commentaireFacilite: "",
      commentaireQualite: "",
      commentaireGlobal: ""
    })
  }

  ngOnInit(): void {
    // this.evaluationForm.setValue(this.evaluationsAFaire);
  }

  miseAJourEvaluation() {
    // console.log("Evaluation a faire : ", this.evaluationsAFaire);
    let evaluationsAFaire = this.evaluationForm.value;
    evaluationsAFaire._id = this.evaluationsAFaire._id;
    // console.log("Evaluation faite : ", evaluationsAFaire);
    this.evaluationService.miseAJourEvaluation(evaluationsAFaire).subscribe((params) => {
      this.evaluationsAFaire = undefined
    })

  }

}
