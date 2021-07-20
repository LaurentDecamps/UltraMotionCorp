import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../models/entreprise'

@Component({
  selector: 'app-display-companies',
  templateUrl: './display-companies.component.html',
  styleUrls: ['./display-companies.component.css']
})
export class DisplayCompaniesComponent implements OnInit {
  filteredCompanies: Entreprise[] = null

  constructor() { }

  ngOnInit(): void {
    this.filteredCompanies = history.state.data
  }

}
