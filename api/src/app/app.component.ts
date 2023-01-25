import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Data Throw API';
  users: any;

  constructor(private userData: UsersdataService) {
    userData.users().subscribe((data: any) => {
      console.warn("data", data);
      this.users = data.data;
    });
  }
}
