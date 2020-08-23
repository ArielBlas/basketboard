import { Component, OnInit, DoCheck } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck {
  public auth: any;
  bigChart = [];
  cards = [];
  pieChart = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart()
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
  }

  ngDoCheck() {
    this.auth = JSON.parse(localStorage.getItem('auth'));

    if(!this.auth){
      this.router.navigate([''])
    }
  }

}
