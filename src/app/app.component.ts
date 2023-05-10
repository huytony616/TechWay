import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  helper = new JwtHelperService();
  title = 'TechWay';
  constructor(private authSVC: UserService) {}

  ngOnInit(): void {
    const Token = localStorage.getItem('jwtToken');
    if (Token != null && Token != '') {
      this.authSVC.decodedToken = this.helper.decodeToken(Token);
    }
  }
}
