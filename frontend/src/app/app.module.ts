import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
