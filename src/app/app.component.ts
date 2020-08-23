import { Component, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges, DoCheck {
  title = 'basketboard';
  sideBarOpen = true;
  public auth: any;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnChanges(){
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }

  ngDoCheck(){
    if(!this.auth){
      this.auth = JSON.parse(localStorage.getItem('auth'));
    }
    
  }
}
