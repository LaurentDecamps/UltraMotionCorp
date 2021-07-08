import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isDisplay = true;
  entrepriseIsDisplay = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  clientDisplay = () => {
    this.isDisplay = !this.isDisplay;
  }
  entrepriseDisplay = () => {
    this.entrepriseIsDisplay = !this.entrepriseIsDisplay;
  }

  to
}
