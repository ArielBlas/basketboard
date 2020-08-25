import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,DoCheck{

  public title: string;
  public auth: any;

  constructor(private router: Router) { 
    this.auth = JSON.parse(localStorage.getItem('auth'));
    this.title = 'Basquetboard';
  }

  ngOnInit(): void {
    this.auth = JSON.parse(localStorage.getItem('auth')); 
  }

  ngDoCheck(){
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if(this.auth){
      this.router.navigate(['dashboard'])
    }
  }

}
