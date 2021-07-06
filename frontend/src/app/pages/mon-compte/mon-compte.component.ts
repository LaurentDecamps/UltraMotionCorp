import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  entrepriseConnectee : Entreprise

  constructor(private entreprisesService : EntreprisesService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.entreprisesService.findById(this.route.snapshot.params.id).subscribe((data) =>{
      console.log(this.route.snapshot.params.id);
      console.log(data);
      this.entrepriseConnectee = data;
    })
  }

}
