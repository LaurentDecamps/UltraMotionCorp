import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
  currentClient: Observable<any>;
  currentEntreprise: Observable<any>;
  isClientConnect: boolean;
  isEntrepriseConnect: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.currentClientSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('clientCourant')));

    this.currentClient = this.currentClientSubject.asObservable();

    // Fait référence au getter
    if (this.currentClientValue) {
      this.isClientConnect = true;
    } else {
      this.isClientConnect = false;
    }

    this.currentEntrepriseSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('entrepriseCourante')));

    this.currentEntreprise = this.currentEntrepriseSubject.asObservable();

    if (this.currentEntrepriseValue) {
      this.isEntrepriseConnect = true;
    } else {
      this.isEntrepriseConnect = false;
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
  loginClient (email: string, motDePasse: string){
    // Envoie une méthode HTTP post au BACK
    console.log("On envoie le mot de passe", motDePasse);
    return this.http.post<any>(`${environment.apiUrl}/auth/client/signin`, { email, motDePasse })
      .pipe(map(client => {
        localStorage.setItem('clientCourant', JSON.stringify(client));
        this.currentClientSubject.next(client);
        this.isClientConnect = true;
        return client;
      }));
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
        this.currentEntrepriseSubject.next(entreprise);
        this.isEntrepriseConnect = true;
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
      this.currentEntrepriseSubject.next(entreprise);
      this.isEntrepriseConnect = true;
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
    this.currentEntrepriseSubject.next(null);
    this.isClientConnect = false;
    this.isEntrepriseConnect = false;
    this.router.navigate(['/']);
  }
}
