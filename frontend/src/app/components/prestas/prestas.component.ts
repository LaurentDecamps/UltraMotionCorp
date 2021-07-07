import { Component, OnInit } from '@angular/core';
import { Prestations } from 'src/app/models/prestations';
import { PrestationsService } from 'src/app/services/prestations.service';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  prestations : Prestations;

  constructor(private prestationsService : PrestationsService) { }

  ngOnInit(): void {
  }

}
