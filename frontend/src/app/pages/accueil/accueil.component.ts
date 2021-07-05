import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from '../../services/professionel.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  texteRecherchePro = 'Plombier, Domoticien, ...';

  listePro: any;

  constructor(private professionelService: ProfessionelService) { }

  ngOnInit(): void {
    this.professionelService.GetProfessionel().subscribe((professionels) => {
      console.log(professionels);
      this.listePro = professionels;
    })
  }

  onTrouverPro(): void {
    this.texteRecherchePro = '';
  }

}
