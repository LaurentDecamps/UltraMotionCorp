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
    return this.httpClient.get<Entreprise>(`${environment.apiUrl}/entreprises/${id}`)
  }
}
