import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RecherchePrestationComponent } from './pages/recherche-prestation/recherche-prestation.component';
import { NouveauProjetComponent } from './pages/nouveau-projet/nouveau-projet.component';
import { MonCompteComponent } from './pages/mon-compte/mon-compte.component';
import { DevisComponent } from './components/devis/devis.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { InfosComponent } from './components/infos/infos.component';
import { PrestasComponent } from './components/prestas/prestas.component';
import { NotifsComponent } from './components/notifs/notifs.component';


const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path: "auth", component: AuthenticationComponent, children: [
    {path: "signin", component: SignInComponent},
    {path: "signup", component: SignUpComponent},
  ]},
  {path: "fnprst", component: RecherchePrestationComponent},
  {path: "newprjct", component: NouveauProjetComponent},
  {path: "mncpt/:id", component: MonCompteComponent, children: [
    {path: "devis", component: DevisComponent},
    {path: "projets", component: ProjetsComponent},
    {path: "infos", component: InfosComponent},
    {path: "prestas", component: PrestasComponent},
    {path: "notifs", component: NotifsComponent}
  ]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
