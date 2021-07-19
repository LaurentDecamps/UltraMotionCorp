import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devis } from '../models/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }

  getDevisByClient(idClient: string): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${environment.apiUrl}/devis/clients/${idClient}`);
  }

  /**
   * Récupère l'ensemble des devis rattaché à un projet et une prestation de ce projet
   * @param idProjet L'identifiant du projet dont on doit récupérer les devis
   * @param idPrestation L'identifiant de la prestation dont on doit récupérer les devis
   * @returns
   */
  getDevisByProjetByPrestation = (idProjet : string, idPrestation : string) => {
    return this.http.get<Devis[]>(`${environment.apiUrl}/devis/projets/${idProjet}/prestations/${idPrestation}`);
  }

  /**
   * Ajout un devis via un post sur le back end
   * @param devis Devis à ajouter en base de donnée
   * @returns L'observable du devis ajouté en base de donnée
   */
  addDevis = (devis : Devis) => {
    return this.http.post<Devis>(`${environment.apiUrl}/devis`, devis);
  }
}
