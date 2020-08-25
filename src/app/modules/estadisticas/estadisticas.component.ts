import { Component, OnInit, DoCheck } from '@angular/core';
import { Tiros } from '../../models/tiros';
import { Router } from '@angular/router';

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
  public getJugadores: any;
  public players: any;
  public tiros: Tiros;
  public tirosDB: any;
  public getTiros: any;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;
  tipos_de_tiros: string[] = ['Puntas', 'Corto', 'Frente', 'Lado izquierdo', 'Lado derecho'];

  constructor(private router: Router) { 
    let arr = []
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    this.getJugadores = JSON.parse(localStorage.getItem('jugadores'));
    if(this.getJugadores){
      for(let jugadores of this.getJugadores){    
        if(this.auth && this.auth.id === jugadores.coach_id){
          arr.push(jugadores)
        }
      } 
    }
    
    this.players = arr
    console.log('vamos que se puede', this.players)
  }

  ngOnInit(): void {
    this.tiros = new Tiros(null, null, null, null, null, []);
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngDoCheck(){
    let arr=[];
    this.getTiros = JSON.parse(localStorage.getItem('tiros')) 
    this.users = JSON.parse(localStorage.getItem('users')) 

    if(this.getTiros){
      for(let tiros of this.getTiros){
        for(let user of this.users){
          if(user.id == tiros.user_id){      
            tiros.users_tiros = user;

            if(this.auth && this.auth.id === tiros.coach_id){
              arr.push(tiros)
            }
          }
        }
      }  
    }

    console.log('este es el array de esdisticas',arr)

    this.ELEMENT_DATA = arr;
    this.displayedColumns = ['tirador', 'encesto', 'distancia', 'posiciones'];
    this.dataSource = this.ELEMENT_DATA;

    if(!this.auth){
      this.router.navigate([''])
    }
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

    
  }

}
