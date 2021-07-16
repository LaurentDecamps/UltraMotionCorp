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
  typesPrestation: Set<string> = new Set([])
  search: RegExp

  constructor(private professionelService: ProfessionelService) { }

  ngOnInit(): void {
    this.professionelService.getProfessionel().subscribe((professionels) => {
      this.listePro = professionels;
    })
  }

  getInput = (search) => {
    if (search.length > 2) {
      this.search = new RegExp(search, "i")
      this.proFiltered = this.listePro.filter(pro => pro.nom.match(this.search) || pro.prestations.some(pres => this.search.test(pres.type)))
      this.proFiltered.forEach(pro => pro.prestations.forEach(pres => this.typesPrestation.add(pres.type)))
    }
    else {
      if (this.proFiltered) {
        this.proFiltered = undefined
      }
    }
  }

  getCompanies = (search) => {
    document.querySelector("#search")["value"] = search
    this.getInput(search)
    this.onTrouverPro(search)
  }

  onTrouverPro(search): void {
    console.log(search)
  }

}
