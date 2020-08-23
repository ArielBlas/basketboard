import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'basketboard';
  sideBarOpen = true;
  public auth: any;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(){
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }
}
