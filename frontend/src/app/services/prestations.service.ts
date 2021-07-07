import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestations } from '../models/prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  constructor(private httpClient : HttpClient) { }

  findPrestationByEntrepriseID(idEntreprise : string) : Observable<Prestations> {
    return this.httpClient.get<Prestations>(`${environment.apiUrl}/prestations/entreprise/${idEntreprise}`)
  }
}
