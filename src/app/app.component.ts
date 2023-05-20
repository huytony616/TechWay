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
  str : string = '';
  givRole: string[]=[];
  acpRole:string[]=['ROLE_DIRE','ROLE_STAFF'];
  constructor(private authSVC: UserService) {}

  ngOnInit(): void {
    const Token = localStorage.getItem('jwtToken');
    if (Token != null && Token != '') {
      this.authSVC.decodedToken = this.helper.decodeToken(Token);
    }
    

    if (this.authSVC.isLoggedIn() && Token != null) {
      const dcdToken = this.helper.decodeToken(Token);
      this.str = dcdToken.roles;
      this.givRole = this.str.substring(1,this.str.length-1).split(',');
      const containsAny = this.givRole.every(item => this.acpRole.includes(item));
      if (containsAny) {
        this.authSVC.decodedToken = dcdToken;
        this.authSVC.hasRole = true;
      } else {
        this.authSVC.hasRole = false;
      }
    }else{
      this.authSVC.hasRole = false;
    }
  }
}
