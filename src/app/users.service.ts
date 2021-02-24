import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  public hostProducts:string="http://localhost:8283"
  public hostCustomers:string="http://localhost:8282"
  constructor(private http:HttpClient,private cookieService:CookieService) { }
  
  getProducts(){
    let options = {
      headers: new HttpHeaders().set('authorization', 'Bearer '+this.cookieService.get('access-token'))
  };
    console.log("access-token    :"+this.cookieService.get('access-token'));
    console.log("refresh-token   :"+this.cookieService.get('refresh-token'));
    
    return this.http.get(this.hostProducts+"/products",options);
  }

  getCustomers(){
    let options = {
      headers: new HttpHeaders().set('authorization', 'Bearer '+this.cookieService.get('access-token'))
  };
    return this.http.get(this.hostCustomers+"/customers",options);
  }
}
