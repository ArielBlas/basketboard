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
  public players: any;
  public tiros: Tiros;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;
  tipos_de_tiros: string[] = ['Puntas', 'Corto', 'Frente', 'Lado izquierdo', 'Lado derecho'];

  constructor(private router: Router) { 
    this.auth = JSON.parse(localStorage.getItem('auth'));
    if(this.auth){
      this.players = this.auth.jugadores
    }
    
  }

  ngOnInit(): void {
    this.tiros = new Tiros(null,null, null, null, []);
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngDoCheck(){
    let arr=[];
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    this.users = JSON.parse(localStorage.getItem('users')) 

    if(this.auth){
      for(let player of this.auth.jugadores){
        for(let tiros of player.tiros){
          if(tiros.user_id == player.id){
            tiros.nombre = player.nombre
          }
          arr.push(tiros)
        }
      }  
    }

    this.ELEMENT_DATA = arr;
    this.displayedColumns = ['tirador', 'encesto', 'distancia', 'posiciones'];
    this.dataSource = this.ELEMENT_DATA;

    if(!this.auth){
      this.router.navigate([''])
    }
  }

  onSubmit(){

    for(let player of this.auth.jugadores){
      if(player.id == this.tiros.user_id){
        this.tiros.id = player.tiros.length +1;
        player.tiros.push(this.tiros);
      }
    }

    localStorage.setItem('auth', JSON.stringify(this.auth))

    for(let user of this.users){
      if(user.id == this.auth.id){
        user.jugadores = this.auth.jugadores
      }
    }

    localStorage.setItem('users', JSON.stringify(this.users))
 
  }

}
