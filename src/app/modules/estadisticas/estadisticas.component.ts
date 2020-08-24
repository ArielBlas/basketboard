import { Component, OnInit, DoCheck } from '@angular/core';
import { Tiros } from '../../models/tiros';

export interface PeriodicElement {
  nombre: string;
  apellido: number;
  legajo: string;
}

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit, DoCheck {
  public tiros: Tiros;
  public tirosDB: any;
  public getTiros: any;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;
  tipos_de_tiros: string[] = ['Puntas', 'Corto', 'Frente', 'Lado izquierdo', 'Lado derecho'];

  constructor() { 
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngOnInit(): void {
    this.tiros = new Tiros(null, null, null, null, null, []);
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    console.log(this.auth.jugadores)
    
  }

  ngDoCheck(){
    this.getTiros = JSON.parse(localStorage.getItem('tiros')) 
    this.users = JSON.parse(localStorage.getItem('users')) 

    for(let tiros of this.getTiros){
      for(let user of this.users){
        if(user.id == tiros.user_id){      
          tiros.users_tiros = user;
        }
      }
    }

    this.ELEMENT_DATA = this.getTiros;
    this.displayedColumns = ['tirador', 'encesto', 'distancia', 'posiciones'];
    this.dataSource = this.ELEMENT_DATA;
  }

  onSubmit(){
    if(localStorage.getItem('tiros') === null){
      this.tirosDB = [];
    }else{
      this.tirosDB = JSON.parse(localStorage.getItem('tiros'));
    }

    this.tiros.id= this.tirosDB.length+1;
    this.tiros.coach_id = this.auth.id;

    this.tirosDB.push(this.tiros);

    localStorage.setItem('tiros', JSON.stringify(this.tirosDB))

    console.log(this.tiros)
  }

}
