import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../models/entreprise'
import { DisplayCompaniesService } from '../../services/display-companies.service'

@Component({
  selector: 'app-display-companies',
  templateUrl: './display-companies.component.html',
  styleUrls: ['./display-companies.component.css']
})
export class DisplayCompaniesComponent implements OnInit {
  filteredCompanies: Entreprise[]

  constructor(private receiveService: DisplayCompaniesService) { }

  ngOnInit(): void {
  }

}
