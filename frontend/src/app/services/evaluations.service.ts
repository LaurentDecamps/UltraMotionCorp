import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evaluation } from '../models/evaluations';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  constructor(private httpClient : HttpClient) { }

  getEvaluationByClient(idClient : string) : Observable<Evaluation[]>{
    return this.httpClient.get<Evaluation[]>(`${environment.apiUrl}/evaluations/clients/${idClient}`);
  }

  createEvaluation = (evaluation : Evaluation) => {
    return this.httpClient.post<Evaluation>(`${environment.apiUrl}/evaluations`, evaluation);
  }
}
