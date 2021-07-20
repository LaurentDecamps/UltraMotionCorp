import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Devis } from 'src/app/models/devis';
import { Entreprise } from 'src/app/models/entreprise';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-mesdevis',
  templateUrl: './mesdevis.component.html',
  styleUrls: ['./mesdevis.component.css']
})
export class MesdevisComponent implements OnInit {

  listeDevis : Devis[] = Devis[0];
  devisDemandes : Devis[] = Devis[0];

  idConnexion: string;
  compteEntreprise: boolean = false;
  compteClient: boolean = false;
  compteAdmin: boolean = false;
  entrepriseConnectee: Entreprise;
  clientconnecte: Client;
  devisEnCours: Devis;

  constructor(private devisService: DevisService) { }

  ngOnInit(): void {
    this.idConnexion = localStorage.getItem('entrepriseCourante');
    this.devisService.getDevisByEntreprise(this.idConnexion).subscribe((data) => {
      this.listeDevis = data;
      this.devisDemandes = this.listeDevis.filter(devis => devis.etat === "demande");
    })
  }

  selectionDevis(devisSelectionne : Devis) {
    console.log(devisSelectionne);
    this.devisEnCours = devisSelectionne;
  }

  miseAjourDevis = (devis) => {
    console.log("Devis reçu : ",devis);

    this.devisEnCours.etat = devis.etat;
  }

}
