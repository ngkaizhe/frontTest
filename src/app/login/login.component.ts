import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * login
   */
  public login() {
    const login_username = (<HTMLInputElement> document.getElementById('login_username')).value;
    const login_password = (<HTMLInputElement> document.getElementById('login_password')).value;
  }


}
