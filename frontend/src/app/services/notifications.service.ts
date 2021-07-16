import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from 'src/app/models/notification';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private httpClient : HttpClient) { }

  addNotification = (notification : Notification) => {
    return this.httpClient.post<Notification>(`${environment.apiUrl}/notifications`, notification);
  }
}
