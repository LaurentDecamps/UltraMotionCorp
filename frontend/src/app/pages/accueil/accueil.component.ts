import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from '../../services/professionel.service';
import { DisplayCompaniesService } from '../../services/display-companies.service';
import { Entreprise } from '../../models/entreprise';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listePro: Entreprise[];
  proFiltered: Entreprise[];
  displaySearchResults: String[] = undefined
  typesPrestation: Set<string> = new Set([])
  search: RegExp

  constructor(
    private professionelService: ProfessionelService,
    private sendService: DisplayCompaniesService
  ) { }

  ngOnInit(): void {
    this.professionelService.getProfessionel().subscribe((professionels) => {
      this.listePro = professionels;
    })
  }

  getInput = search => {
    if (search.length > 2) {
      this.search = new RegExp(search, "i")
      this.proFiltered = this.listePro.filter(pro => pro.nom.match(this.search) || pro.prestations.some(pres => this.search.test(pres.type)))
      this.displaySearchResults = []
      if (!this.proFiltered.length) {
        this.displaySearchResults.push("Aucun Résultats")
      }
      else {
        this.proFiltered.forEach(pro => {
          this.typesPrestation.clear()
          if (this.displaySearchResults.length < 10) {
            this.displaySearchResults.push(`${pro.nom} - ${pro.adresse.split(" ").pop()}`)
          }
          pro.prestations.forEach(pres => {
            if (pres.type.match(this.search)) {
              this.typesPrestation.add(pres.type)
              this.displaySearchResults = this.displaySearchResults.concat([...this.typesPrestation])
            }
          })
        })
      }
    }
    else {
      if (this.displaySearchResults) {
        this.displaySearchResults = undefined
      }
    }
  }

  getCompanies = (search) => {
    document.querySelector("#search")["value"] = search
    this.getInput(search)
    this.onTrouverPro()
  }

  onTrouverPro(): void {
    this.sendService.getFilteredCompanies(this.proFiltered)
  }

}
