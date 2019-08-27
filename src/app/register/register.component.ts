import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private auth_service: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.data);
    this.auth_service.register(this.data).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
    });
  }
}
