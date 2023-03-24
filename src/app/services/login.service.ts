import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  loginWithEmail(userInfo:any){
    return this.http.post("",userInfo);
  }
}
