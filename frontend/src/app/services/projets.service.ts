import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projet } from '../models/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private httpClient : HttpClient) { }

  getProjetsByClient(idClient : string) : Observable<Projet[]>{
    return this.httpClient.get<Projet[]>(`${environment.apiUrl}/projets/clients/${idClient}`);
  }

  getProjetById(idProjet : string) : Observable<Projet>{
    return this.httpClient.get<Projet>(`${environment.apiUrl}/projets/${idProjet}`);
  }

  create(projet : Projet) {
    // console.log("Creation Projet",projet);
    return this.httpClient.post<Projet>(`${environment.apiUrl}/projets`, projet)
  }
}
