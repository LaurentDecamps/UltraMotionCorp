import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Entreprise } from 'src/app/models/entreprise';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  entrepriseConnectee : Entreprise;
  clientconnecte : Client;

  constructor(private entreprisesService : EntreprisesService,
      private clientsService : ClientService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.entreprisesService.findById(this.route.snapshot.params.id).subscribe((data) =>{
      this.entrepriseConnectee = data;
    });
    if (!this.entrepriseConnectee){
      this.clientsService.findById(this.route.snapshot.params.id).subscribe((data) =>{
        this.clientconnecte = data;
      });
    }
  }

}
