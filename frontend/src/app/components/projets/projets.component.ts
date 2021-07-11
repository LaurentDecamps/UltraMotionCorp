import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  clientConnecte : Client;

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.clientService.findById(localStorage.getItem('clientCourant')).subscribe((data) => {
      this.clientConnecte = data;
      console.log(this.clientConnecte);

    });
  }

}
