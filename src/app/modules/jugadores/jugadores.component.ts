import { Component, OnInit, DoCheck } from '@angular/core';
import { Jugadores } from '../../models/jugadores';
import { Router } from '@angular/router';

export interface PeriodicElement {
  n: any,
  nombre: string;
  legajo: string;
}

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit, DoCheck {
  public jugadores: Jugadores;
  public message: string;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;

  constructor(private router: Router) {
    this.jugadores = new Jugadores(null,'', '', []);
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngOnInit(): void {
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngDoCheck(){
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    this.users = JSON.parse(localStorage.getItem('users')) 
    
    if(this.auth){
      this.ELEMENT_DATA = this.auth.jugadores;
      this.displayedColumns = ['n','nombre', 'legajo'];
      this.dataSource = this.ELEMENT_DATA;
    }

    if(!this.auth){
      this.router.navigate([''])
    }
  }

  onSubmit(){
    if(localStorage.getItem('auth') === null){
      this.auth = [];
    }else{
      this.auth = JSON.parse(localStorage.getItem('auth'));
    }

    let bool = true;
    
    for(let player of this.auth.jugadores){
      if(player.legajo === this.jugadores.legajo){
        bool = false
      }
    }
    if(bool){
      this.jugadores.id = this.auth.jugadores.length +1;
      this.auth.jugadores.push(this.jugadores);

      localStorage.setItem('auth', JSON.stringify(this.auth))

      for(let user of this.users){
        if(user.id == this.auth.id){
          user.jugadores = this.auth.jugadores
        }
      }

      localStorage.setItem('users', JSON.stringify(this.users))

      return this.message = '';
    }else {
      this.message = 'Este legajo ya existe';
    } 
    
  }

}
