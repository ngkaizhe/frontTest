import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  login(login_info: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', login_info);
  }

  register(register_info: any) {
    return this.http.post('http://127.0.0.1:8000/api/register', register_info);
  }

  logout(logout_info: any){
    return this.http.post('http://127.0.0.1:8000/api/logout', logout_info);
  }
}
