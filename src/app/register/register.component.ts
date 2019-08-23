import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public register() {
    const register_username = (<HTMLInputElement> document.getElementById('register_username')).value;
    const register_password = (<HTMLInputElement> document.getElementById('register_password')).value;
  }
}
