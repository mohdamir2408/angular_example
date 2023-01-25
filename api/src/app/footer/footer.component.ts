import { Component } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users: any;

  constructor(private userData: UsersdataService) {
    userData.users().subscribe((data: any) => {
      console.warn("data", data);
      this.users = data.data;
    });
  }

}
