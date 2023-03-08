import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  currentDate = new Date();

  constructor(public router: Router) {
    setInterval(() => {
      this.currentDate = new Date();
    },1000);
  }
}
