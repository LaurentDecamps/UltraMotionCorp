import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  clientForm : FormGroup;
  entrepriseForm : FormGroup;

  isDisplay = true;
  entrepriseIsDisplay = true;
  

  constructor(private clientService : ClientService, private entreprisesService : EntreprisesService, private router : Router,private fb : FormBuilder) {
    this.clientForm = this.fb.group({
      nom : "",
      prenom : "",
      email : "",
      numeroTelephone : 0,
      motDePasse : "",
      adresse : ""

    })
    this.entrepriseForm = this.fb.group({
      nom : "",
      description : "",
      logoUri : "",
      email : "",
      numeroTelephone : 0,
      motDePasse : "",
      adresse : ""

    })
   }

  ngOnInit(): void {
  }

  clientDisplay = () => {
    this.isDisplay = !this.isDisplay;
  }

  entrepriseDisplay = () => {
    this.entrepriseIsDisplay = !this.entrepriseIsDisplay;
  }

  envoyerClient = () => {
    console.log(this.clientForm.value);
    this.clientService.create(this.clientForm.value).subscribe( () => {
      this.router.navigateByUrl("/mncpt");
    })
  }
  envoyerEntreprise = () => {
    console.log(this.entrepriseForm.value);
    this.entreprisesService.create(this.entrepriseForm.value).subscribe( () => {
      this.router.navigateByUrl("/mncpt");
    })
  }

}
