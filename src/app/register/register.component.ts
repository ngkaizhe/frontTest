import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = {
    name : '',
    email : '',
    password: '',
    password_confirmation: '',
  };

  constructor(private auth_service: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.data);
    this.auth_service.register(this.data).subscribe((result: any) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
