import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title = 'test';

  ngOnInit() {}

  constructor(private dataService: DataServiceService) {
    this.dataService = dataService;
  }

  /**
   * getIndex
   */
  public getIndex() {
    this.dataService.getIndex().subscribe(data => {
      console.log(data);
    });
  }

  public postReservation() {
    this.dataService.postReservation().subscribe(data => {
      console.log(data);
    });
  }

  logout() {
    this.dataService.logout().subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        localStorage.removeItem('token');
        console.log('Logout Successful!');
      }
    });
  }

  public isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
