import { AuthentificationService } from '../services/authentification.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthentificationService) { }

  /**
   * Intercepte toutes les méthodes HTTP que nous envoyons.
   * Rajoute le TOKEN aux headers des requêtes.
   * @param request
   * @param next
   * @returns
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentClient = this.authenticationService.currentClientValue;
    if (currentClient && currentClient.token) {
      request = request.clone({
        setHeaders: {
          token: `${currentClient.token}`
        }
      });
    }

    const currentEntreprise = this.authenticationService.currentEntrepriseValue;
    if (currentEntreprise && currentEntreprise.token) {
      request = request.clone({
        setHeaders: {
          token: `${currentEntreprise.token}`
        }
      });
    }

    return next.handle(request);
  }
}
