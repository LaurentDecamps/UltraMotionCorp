import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private httpClient: HttpClient) { }

  findById(id : string) : Observable<Entreprise> {
    console.log("Id entrep", id);

    return this.httpClient.get<Entreprise>(`${environment.apiUrl}/entreprises/${id}`);
  }

  updateEntreprise = (entreprise : Entreprise) => {
    return this.httpClient.put(`${environment.apiUrl}/entreprises/${entreprise._id}`, entreprise);
  }

  create(entreprise: Entreprise) : Observable<Entreprise> {
    return this.httpClient.post<Entreprise>(`${environment.apiUrl}/entreprises`, entreprise);
  }
}
