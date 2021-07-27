import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading;
  messageErreur;
  isClientDisplay = false;
  isEntrepriseDisplay = false;

  constructor(private authenticationService: AuthentificationService,
    private router: Router,
    private fb: FormBuilder,
    private authentificationService: AuthentificationService
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      motDePasse: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    if (this.authentificationService.currentClientValue || this.authentificationService.currentEntrepriseValue) {
      this.router.navigateByUrl("/mncpt/infos");
    }
    this.loginForm.setValue({ email: "toto@lolococo.fr", motDePasse: "123456789" })
  }

  clientDisplay = () => {
    this.isClientDisplay = !this.isClientDisplay;
    this.isEntrepriseDisplay = false;
  }

  entrepriseDisplay = () => {
    this.isEntrepriseDisplay = !this.isEntrepriseDisplay;
    this.isClientDisplay = false;
  }

  /**
    * Appelle la méthode login(email, password) de AuthenticationService puis redirige vers la page d'accueil
    */
  connecter = () => {
    this.loading = true;
    if (this.isClientDisplay) {
      this.authenticationService.loginClient(this.loginForm.value.email, this.loginForm.value.motDePasse).subscribe(
        () => {
          this.loading = false;
          console.log("On s'en est sorti !");
          this.router.navigateByUrl("/mncpt/infos");
        }
        , (erreur) => {
          this.loading = false;
          this.messageErreur = erreur;        }
        )
    }
    else {
      if (this.isEntrepriseDisplay) {
        this.authenticationService.loginEntreprise(this.loginForm.value.email, this.loginForm.value.motDePasse).subscribe(() => {
          this.loading = false;
          console.log("On s'en est sorti !");
          this.router.navigateByUrl("/mncpt/infos");
        }, (erreur) => {
          console.log("Gestion d'erreur dans le composant", erreur.message);
          this.loading = false;
          this.messageErreur = erreur;
        })
      }
    }
  }
}
