import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from '../../services/professionel.service';
import { Entreprise } from '../../models/entreprise';
import { Router } from '@angular/router'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listePro: Entreprise[];
  proFiltered: Entreprise[] | undefined = undefined
  displaySearchResults: String[] | undefined = undefined
  typesPrestation: Set<string> = new Set([])
  search: RegExp

  constructor(
    private professionelService: ProfessionelService,
    private router: Router
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
        console.log(this.displaySearchResults)
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
    else if (search.length > 0) {
      this.displaySearchResults = ["Entrez 3 caractères au minimum"]
      console.log(this.displaySearchResults)
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
    this.router.navigate(["/search"], {state: {data: this.proFiltered}})
  }

}
