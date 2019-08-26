import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {
    email : '',
    password: '',
  };


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.data).subscribe((result: any) => {
      console.log(result);
      if (result.token) {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/']);
      } else {
        alert('fail');
      }
    });
  }


}
