import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from '../services/professionel.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  texteRecherchePro = 'Plombier, Domoticien, ...';

  listePro: any;

  constructor(private professionelService: ProfessionelService) { }

  ngOnInit(): void {
    this.professionelService.GetProfessionel().subscribe((professionels) => {
      this.listePro = professionels;
      console.log(professionels);

    })
  }

  onTrouverPro(): void {
    this.texteRecherchePro = '';
  }

}
