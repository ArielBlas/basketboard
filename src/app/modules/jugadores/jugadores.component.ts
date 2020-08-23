import { Component, OnInit, DoCheck } from '@angular/core';
import { Jugadores } from '../../models/jugadores';

export interface PeriodicElement {
  nombre: string;
  apellido: number;
  legajo: string;
}

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit, DoCheck {
  public jugadores: Jugadores;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.jugadores = new Jugadores('', '');
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    console.log(this.auth.jugadores)
    
  }

  ngDoCheck(){
    this.auth = JSON.parse(localStorage.getItem('auth')) 

    this.ELEMENT_DATA = this.auth.jugadores;
    this.displayedColumns = ['nombre', 'apellido', 'legajo'];
    this.dataSource = this.ELEMENT_DATA;
  }

  onSubmit(){
    console.log(this.jugadores)
    this.users = JSON.parse(localStorage.getItem('users'))
       

    for(let users of this.users){
      if(this.jugadores.nombre == users.nombre && this.jugadores.legajo == users.legajo){
        console.log('Bienvenido '+ users.nombre)
        this.auth.jugadores.push(users)
        localStorage.setItem('auth', JSON.stringify(this.auth))
      }
    }  
  }


  
  

  logData(row){
    console.log(row)
  }

}
