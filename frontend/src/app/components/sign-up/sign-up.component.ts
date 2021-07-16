import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  clientForm : FormGroup;

  isDisplay = true;
  entrepriseIsDisplay = true;
  

  constructor(private clientService : ClientService, private router : Router,private fb : FormBuilder) {
    this.clientForm = this.fb.group({
      nom : "",
      prenom : "",
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

  envoyer = () => {
    console.log(this.clientForm.value);
    this.clientService.create(this.clientForm.value).subscribe( () => {
      this.router.navigateByUrl("/mncpt");
    })
  }

}
