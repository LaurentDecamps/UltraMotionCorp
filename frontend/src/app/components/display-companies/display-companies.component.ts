import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../models/entreprise'
import { Router } from '@angular/router'

@Component({
  selector: 'app-display-companies',
  templateUrl: './display-companies.component.html',
  styleUrls: ['./display-companies.component.css']
})
export class DisplayCompaniesComponent implements OnInit {
  filteredCompanies: Entreprise[]

  activeIds: string[] =[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeIds = ["panel-1"];
    history.state.data
      ? this.filteredCompanies = history.state.data.sort((a,b) => a.adresse.split(" ").pop().localeCompare(b.adresse.split(" ").pop()))
      : this.router.navigate(["/"])
  }

}
