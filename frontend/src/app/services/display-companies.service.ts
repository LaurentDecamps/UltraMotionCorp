import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class DisplayCompaniesService {
  getFilteredCompanies$: Observable<Entreprise[]>
  private getFilteredCompaniesSubject = new Subject<Entreprise[]>()

  constructor() {
    this.getFilteredCompanies$ = this.getFilteredCompaniesSubject.asObservable()
  }

  getFilteredCompanies = data => {
    this.getFilteredCompaniesSubject.next(data)
  }
}
