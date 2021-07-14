import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestation } from '../models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  constructor(private httpClient : HttpClient) { }

  findPrestationByEntrepriseID(idEntreprise : string) : Observable<Prestation> {
    return this.httpClient.get<Prestation>(`${environment.apiUrl}/prestations/entreprise/${idEntreprise}`)
  }
}
