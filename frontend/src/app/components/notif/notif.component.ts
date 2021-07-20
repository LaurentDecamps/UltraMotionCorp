import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  @Input() notification : Notification;

  constructor() { }

  ngOnInit(): void {
  }



}
