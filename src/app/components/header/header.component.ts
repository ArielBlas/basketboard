import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  public auth: any;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  toggleSideBar(){
    this.toggleSideBarForMe.emit()

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)
  }

  ngDoCheck() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
  }

  removeAuth(){
    localStorage.removeItem('auth');
  }
}
