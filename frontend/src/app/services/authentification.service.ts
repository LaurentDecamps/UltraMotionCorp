import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentClientSubject: BehaviorSubject<any>;
  private currentEntrepriseSubject: BehaviorSubject<any>;
  // private currentUser: Observable<any>;
  isClientConnect: boolean;
  isEntrepriseConnect: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.currentClientSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('clientCourant')));

    // this.currentUser = this.currentClientSubject.asObservable();

    // Fait référence au getter
    if (this.currentClientValue) {
      this.isClientConnect = true;
    } else {
      this.isClientConnect = false;
    }

    this.currentEntrepriseSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('entrepriseCourante')));

    if (this.currentEntrepriseValue) {
      this.isClientConnect = true;
    } else {
      this.isClientConnect = false;
    }
  }

  /**
   * getter sur currentClientSubject
   */
  public get currentClientValue(): any {
    return this.currentClientSubject.value;
  }

  /**
   * getter sur currentEntrepriseSubject
   */
  public get currentEntrepriseValue(): any {
    return this.currentEntrepriseSubject.value;
  }

  /**
   * Connexion client
   * @param email
   * @param password
   * @returns
   */
  loginClient(email: string, motDePasse: string) {
    // Envoie une méthode HTTP post au BACK
    console.log("On envoie le mot de passe", motDePasse);
    return this.http.post<any>(`${environment.apiUrl}/auth/client/signin`, { email, motDePasse })
      .pipe(map(client => {
        localStorage.setItem('clientCourant', JSON.stringify(client));
        this.currentClientSubject.next(client);
        this.isClientConnect = true;
        return client;
      }))
      .pipe(
        catchError((erreur) => {
          console.log('Erreur dans le service')
          console.error(erreur);
          if (erreur instanceof HttpErrorResponse) {
            if (erreur.error instanceof ErrorEvent) {
              console.error("Erreur coté client dans la génération de le requête");
            } else {
              console.log(`Statut de l'erreur: ${erreur.status} ${erreur.statusText}`);
              switch (erreur.status) {
                case 401:      //login
                  this.router.navigateByUrl("/");
                  break;
                case 403:     //forbidden
                  this.router.navigateByUrl("/");
                  break;
              }
            }
          } else {
            console.error("Autre chose qu'une erreur HTTP");
          }

          return throwError(erreur);    //On renvoit l'erreur au composant
        })
      );
  }

  /**
   * Inscription client
   * @param client
   * @returns
   */
  signupClient(client: Client) {
    // Envoie une méthode HTTP post au BACK
    return this.http.post<any>(`${environment.apiUrl}/auth/client/signup`, client).pipe(map(client => {
      localStorage.setItem('clientCourant', JSON.stringify(client));
      this.currentClientSubject.next(client);
      this.isClientConnect = true;
      return client;
    }));
  }

  /**
   * Connexion entreprise
   * @param email
   * @param password
   * @returns
   */
  loginEntreprise(email: string, motDePasse: string) {
    // Envoie une méthode HTTP post au BACK
    return this.http.post<any>(`${environment.apiUrl}/auth/entreprise/signin`, { email, motDePasse })
      .pipe(map(entreprise => {
        localStorage.setItem('entrepriseCourante', JSON.stringify(entreprise));
        this.currentClientSubject.next(entreprise);
        this.isClientConnect = true;
        return entreprise;
      }));
  }

  /**
   * Inscription entreprise
   * @param entreprise
   * @returns
   */
  signupEntreprise(entreprise: Entreprise) {
    // Envoie une méthode HTTP post au BACK
    return this.http.post<any>(`${environment.apiUrl}/auth/entreprise/signup`, entreprise).pipe(map(entreprise => {
      localStorage.setItem('entrepriseCourante', JSON.stringify(entreprise));
      this.currentClientSubject.next(entreprise);
      this.isClientConnect = true;
      return entreprise;
    }));
  }

  /**
   * Déconnexion client et entreprise
   */
  logout() {
    localStorage.removeItem('clientCourant');
    localStorage.removeItem('entrepriseCourante');
    this.currentClientSubject.next(null);
    this.isClientConnect = false;
    this.router.navigate(['/']);
  }
}
