import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  texteRecherchePro = 'Plombier, Domoticien, ...';

  listePro = [
    { nomPro: "Roger and Co", descriptif: "Les plus beaux"},
    { nomPro: "Marcel and Co", descriptif: "Les plus fort"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTrouverPro(): void {
    this.texteRecherchePro = '';
  }

}
