import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devis } from '../models/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private httpClient : HttpClient) { }

  getDevisByClient(idClient : string) : Observable<Devis[]>{
    return this.httpClient.get<Devis[]>(`${environment.apiUrl}/devis/clients/${idClient}`);
  }
}
