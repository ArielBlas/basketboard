import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public register: Register;
  public message: string;
  private users: any;

  constructor(private router: Router) {
   }

  ngOnInit(): void{
    this.register = new Register(1 ,'', '', '', [], '', '');
  }

  onSubmit(form){
    let bool = true;
    if(localStorage.getItem('users') === null){
      this.users = [];
    }else{
      this.users = JSON.parse(localStorage.getItem('users'));
    }

    for(let user of this.users){
      if(user.email === this.register.email){
        bool = false;
      }
    }

    if(bool){
      this.register.id= this.users.length+1
      this.users.push(this.register);

      localStorage.setItem('users', JSON.stringify(this.users))

      return this.router.navigate(['dashboard'])
    }else {
      this.message = 'Este usuario ya existe';
    }      
  }
  
}
