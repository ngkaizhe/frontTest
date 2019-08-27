import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
   * getIndex
   */
  getIndex() {
    return this.http.get('http://127.0.0.1:8000/api/reservations');
  }

  postReservation() {
    const data = {
      parent_name : 'testingFront2',
      email : 'kaizhe1991@outlook.com',
      line_id : 'a line id',
      children_name : 'kaizhe',
      children_age : Number(15),
      gender : Number(0),
      phone_number : '0909458930',
      description : 'nice description btw',
      status: Number(1),
      reply_message : 'replying dude',
    };
    return this.http.post('http://127.0.0.1:8000/api/reservations', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
  }

  logout() {
    return this.http.post('http://127.0.0.1:8000/api/logout', '', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
