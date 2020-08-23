import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public register: Register;
  private users: any;

  constructor() {
   }

  ngOnInit(): void{
    this.register = new Register(1 ,'', '', [], '', '', '');
  }

  onSubmit(form){
    if(localStorage.getItem('users') === null){
      this.users = [];
    }else{
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    this.register.id= this.users.length+1
    this.users.push(this.register);

    localStorage.setItem('users', JSON.stringify(this.users))
    console.log(this.register)
  }
}
