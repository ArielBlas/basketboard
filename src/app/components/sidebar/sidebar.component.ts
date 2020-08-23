import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, DoCheck {
  public auth: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }

}
