import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public estadisticas: any;
  public users: any;
  public pie: any;
  
  constructor() { 
    this.estadisticas = JSON.parse(localStorage.getItem('tiros'));
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  /* Probando highcharts */

  bigChart(){
    return[{
      name: 'Asia',
      date: [502, 635, 809, 947, 1402, 3534, 5268]
    }, {
      name: 'Africa',
      date: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 336, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }]
  }

  cards() {
    return [71, 78, 39, 66]
  }
  
  pieChart(){
    this.pie = [{
      name: null,
      y:null,
      distancia: null,
      posiciones: null
    }]

    if(this.estadisticas){
      for(let tiros of this.estadisticas){
        for(let user of this.users){
          if(user.id == tiros.user_id){
            if(tiros.encesto == true){  
              this.pie.push({
                  name: user.nombre,
                  y: 100,
                  distancia: tiros.distancia,
                  posiciones: tiros.posiciones
                })                      
            }
          }
        }
      }
    }
    return this.pie
  }
}
