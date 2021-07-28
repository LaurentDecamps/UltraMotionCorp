import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authentificationService: AuthentificationService) { }

    /**
     * Intercepte toutes les requêtes HTTP que nous envoyons.
     * Evite de donner le détail des erreurs dans la console.
     * @param request
     * @param next
     * @returns
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err: any) => {
            if (err.status === 401) {
                this.authentificationService.logout();
            }
            // // console.log(err);

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
