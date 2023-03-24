import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {

  constructor(private loginService:LoginService){}
  
  login(formValue : any){
    this.loginService.loginWithEmail(formValue).subscribe((res)=>{
      
    })  
  }

}
