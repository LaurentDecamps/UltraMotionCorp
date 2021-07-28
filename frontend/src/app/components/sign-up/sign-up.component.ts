import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ClientService } from 'src/app/services/client.service';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { ProjetsService } from '../../services/projets.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  clientForm: FormGroup;
  entrepriseForm: FormGroup;

  isClientDisplay = false;
  isEntrepriseDisplay = false;

  newProject;

  get nomClient() { return this.clientForm.get('nom'); }
  get prenomClient() { return this.clientForm.get('prenom'); }
  get emailClient() { return this.clientForm.get('email'); }
  get numeroTelephoneClient() { return this.clientForm.get('numeroTelephone'); }
  get motDePasseClient() { return this.clientForm.get('motDePasse'); }
  get adresseClient() { return this.clientForm.get('adresse'); }

  constructor(private clientService: ClientService,
    private entreprisesService: EntreprisesService,
    private router: Router,
    private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private projetsService: ProjetsService
  ) {
    this.clientForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", Validators.required],
      numeroTelephone: ["", Validators.required],
      motDePasse: ["", Validators.required],
      adresse: ["", Validators.required]
    })
    this.entrepriseForm = this.fb.group({
      nom: ["", Validators.required],
      description: ["", Validators.required],
      logoUri: ["", Validators.required],
      email: ["", Validators.required],
      numeroTelephone: ["", Validators.required],
      motDePasse: ["", Validators.required],
      adresse: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.newProject = JSON.parse(localStorage.getItem("newProject"));
    if (this.authentificationService.currentClientValue?.client?.id || this.authentificationService.currentEntrepriseValue?.entreprise?.id) {
      this.router.navigateByUrl("/mncpt/infos");
    }
  }

  clientDisplay = () => {
    this.isClientDisplay = !this.isClientDisplay;
    this.isEntrepriseDisplay = false;
    this.clientForm.setValue({nom: "Chantepie", prenom: "Hélène", email: "helene@chantepie.fr",
        numeroTelephone: "0606060606", motDePasse: "123456", adresse: "221 B Bakerstreet London"});
  }

  entrepriseDisplay = () => {
    this.isEntrepriseDisplay = !this.isEntrepriseDisplay;
    this.isClientDisplay = false;
  }

  inscrireClient = () => {
    console.log(this.clientForm.value);
    this.authentificationService.signupClient(this.clientForm.value).subscribe(() => {
      // localStorage.removeItem("newProject")
      this.projetsService.create(this.newProject).subscribe(project => {
        let clientId = JSON.parse(localStorage.getItem("clientCourant")).client.id
        let clientToPut: Client
        this.clientService.findById(clientId).subscribe(client => {
          clientToPut = client
          clientToPut.projets.push(project)
          this.clientService.update(clientToPut).subscribe(() => {
            localStorage.setItem("creationCompteReussi",
             "Création du compte client et du projet réussis ! L'entreprise pré-selctionnée a également été ajouté !");
          })
        })
      })

      this.router.navigateByUrl("/mncpt/infos");
    })
  }

  inscrireEntreprise = () => {
    console.log("Entreprise à inscrire", this.entrepriseForm.value);
    this.authentificationService.signupEntreprise(this.entrepriseForm.value).subscribe(() => {
      this.router.navigateByUrl("/mncpt/infos");
    })
  }
}
