import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: Login;
  public autenticado: boolean;
  private auth: any;

  constructor() { 

    // let users = [{
    //   id: 1,
    //   nombre:'Ariel',
    //   apellido: 'Blas',
    //   email: 'ariel@gmail.com',
    //   password: '12345',
    // },{
    //   id: 2,
    //   nombre:'Juan',
    //   apellido: 'Carlos',
    //   email: 'juan@gmail.com',
    //   password: '12345',
    // }]

    //localStorage.setItem('users', JSON.stringify(users))
  }

  ngOnInit(): void {
    this.login = new Login('', '');
  }

  onSubmit(form){
    this.auth = JSON.parse(localStorage.getItem('users'))
    this.autenticado = false;
    for(let auth of this.auth){
      if(this.login.email == auth.email && this.login.password == auth.password){
        console.log('Bienvenido '+ auth.nombre)
        localStorage.setItem('auth', JSON.stringify(auth))

        this.autenticado = true;
      }
    }  
    
    console.log(this.autenticado)
  }
}
