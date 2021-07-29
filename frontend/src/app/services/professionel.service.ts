import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class ProfessionelService {

  constructor(private http: HttpClient) { }

  getProfessionel(){
    return this.http.get<Entreprise[]>('http://localhost:8080/entreprises/');
  }
}
