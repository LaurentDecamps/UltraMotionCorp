import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from '../../services/professionel.service';
import { Entreprise } from '../../models/entreprise';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listePro: Entreprise[];
  proFiltered: Entreprise[] = undefined;

  constructor(private professionelService: ProfessionelService) { }

  ngOnInit(): void {
    this.professionelService.getProfessionel().subscribe((professionels) => {
      this.listePro = professionels;
      console.log(this.listePro)
    })
  }

  getInput = (search) => {
    console.log(search)
    if (search.length > 2) {
      let regex = new RegExp(search, "i")
      this.proFiltered = this.listePro.filter(pro => pro.nom.match(regex))      
    }
    else {
      if (this.proFiltered) {
        this.proFiltered = undefined
      }
    }
  }

  onTrouverPro(): void {}

}
