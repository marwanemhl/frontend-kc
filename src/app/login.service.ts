import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public host:string="http://localhost:8585"
 
  constructor(private http:HttpClient,private cookieService:CookieService) { }
  
login(form){
  console.log(form);

  let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};
  let body = `username=${form.username}&password=${form.password}`;
console.log(body);
  return this.http.post(this.host+"/login",body,options);
} 

getToken(refreshToken,accessToken){
  this.cookieService.set('refresh-token',refreshToken);
  this.cookieService.set('access-token',accessToken);
  console.log("access-token  --",this.cookieService.get('access-token'));
  console.log("refresh-token  --",this.cookieService.get('refresh-token'));
}

refreshToken(){
  let refreshHeader = {
    headers: new HttpHeaders().set('authorization', 'Bearer '+this.cookieService.get('refresh-token'))
    
};
console.log("refreshHeader",this.cookieService.get('refresh-token'));
  return this.http.post(this.host+"/refreshToken",null,refreshHeader);
}



}
