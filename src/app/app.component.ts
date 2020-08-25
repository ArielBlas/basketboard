import { Component, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck {
  title = 'Basketboard';
  sideBarOpen = true;
  public auth: any;

  constructor(private router: Router){
    
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngDoCheck(){
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }
}
