import { Component, OnInit, DoCheck } from '@angular/core';
import { Jugadores } from '../../models/jugadores';
import { Router } from '@angular/router';

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
  public message: string;
  public jugadoresDB: any;
  public getJugadores: any;
  public users: any;
  public auth: any;
  public ELEMENT_DATA : PeriodicElement[];
  public displayedColumns: string[] ;
  public dataSource: any;

  constructor(private router: Router) {
    this.auth = JSON.parse(localStorage.getItem('auth')) 
  }

  ngOnInit(): void {
    this.jugadores = new Jugadores(null, null, null, '', '');
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    
  }

  ngDoCheck(){
    this.auth = JSON.parse(localStorage.getItem('auth')) 
    this.getJugadores = JSON.parse(localStorage.getItem('jugadores'));
    this.users = JSON.parse(localStorage.getItem('users'));

    let arr = [];

    if(this.getJugadores){
  
      for(let jugadores of this.getJugadores){
        for(let user of this.users){
          if(user.id == jugadores.user_id){      
            jugadores.user_player = user;

            if(this.auth && this.auth.id === jugadores.coach_id){
              arr.push(jugadores)
            }
          }
          
        }
      } 
    }
    
    this.ELEMENT_DATA = arr;
    this.displayedColumns = ['nombre', 'apellido', 'legajo'];
    this.dataSource = this.ELEMENT_DATA;
    

    if(!this.auth){
      this.router.navigate([''])
    }
  }

  onSubmit(){
    this.users = JSON.parse(localStorage.getItem('users'))

    if(localStorage.getItem('jugadores') === null){
      this.jugadoresDB = [];
    }else{
      this.jugadoresDB = JSON.parse(localStorage.getItem('jugadores'));
    }

    this.jugadores.id= this.jugadoresDB.length+1;
    this.jugadores.coach_id = this.auth.id;
    let bool = true;
       
    for(let users of this.users){
     
      if(this.jugadores.nombre == users.nombre && this.jugadores.legajo == users.legajo){
        if(users.id !== this.auth.id){
          if(this.jugadoresDB.length > 0){
              for(let player of this.jugadoresDB){
                if(player.user_id == users.id){
                  this.message = 'El jugador ya tiene un Coach'
                  bool = false;
                }     
              }
              if(bool){
                this.jugadores.user_id = users.id;
                this.jugadoresDB.push(this.jugadores);
              }

              localStorage.setItem('jugadores', JSON.stringify(this.jugadoresDB)) 
          }else{
            this.jugadores.user_id = users.id;
            this.jugadoresDB.push(this.jugadores);

            localStorage.setItem('jugadores', JSON.stringify(this.jugadoresDB))
          }
        }
      } 
    } 

  }

  logData(row){
    console.log(row)
  }

}
