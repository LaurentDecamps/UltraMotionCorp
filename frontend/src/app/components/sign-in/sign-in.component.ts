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

  loginClientForm: FormGroup;
  loading;
  messageErreur;

  constructor(private authenticationService: AuthentificationService,
    private router: Router,
    private fb: FormBuilder,
    private authentificationService : AuthentificationService
  ) {
    this.loginClientForm = this.fb.group({
      email: ["", Validators.required],
      motDePasse: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    if(this.authentificationService.currentClientValue || this.authentificationService.currentEntrepriseValue) {
      this.router.navigateByUrl("/mncpt/infos");
    }
    this.loginClientForm.setValue({email:"toto@lolo.com",motDePasse:"123456"})
  }

  /**
     * Appelle la méthode login(email, password) de AuthenticationService puis redirige vers la page d'accueil
     */
  connecterClient = () => {
    this.loading = true;
    this.authenticationService.loginClient(this.loginClientForm.value.email, this.loginClientForm.value.motDePasse).subscribe(() => {
      this.loading = false;
      console.log("On s'en est sorti !");
      this.router.navigateByUrl("/mncpt/infos");
    }, (erreur) => {
      console.log("Gestion d'erreur dans le composant");
      this.loading = false;
      this.messageErreur = erreur;
    })
  }
}
