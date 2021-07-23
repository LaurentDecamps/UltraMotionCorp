import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RecherchePrestationComponent } from './pages/recherche-prestation/recherche-prestation.component';
import { NouveauProjetComponent } from './pages/nouveau-projet/nouveau-projet.component';
import { MonCompteComponent } from './pages/mon-compte/mon-compte.component';
import { DevisComponent } from './components/devis/devis.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { InfosComponent } from './components/infos/infos.component';
import { PrestasComponent } from './components/prestas/prestas.component';
import { NotifsComponent } from './components/notifs/notifs.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';
import { MesdevisComponent } from './mesdevis/mesdevis.component';
import { DisplayCompaniesComponent } from './components/display-companies/display-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent,
    RecherchePrestationComponent,
    NouveauProjetComponent,
    MonCompteComponent,
    DevisComponent,
    ProjetsComponent,
    InfosComponent,
    PrestasComponent,
    NotifsComponent,
    EvaluationsComponent,
    EvaluationComponent,
    EvaluationFormComponent,
    MesdevisComponent,
    DisplayCompaniesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
