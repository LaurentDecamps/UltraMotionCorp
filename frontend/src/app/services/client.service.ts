import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  findById(id : string) : Observable<Client> {
    return this.httpClient.get<Client>(`${environment.apiUrl}/clients/${id}`)
  }
}
