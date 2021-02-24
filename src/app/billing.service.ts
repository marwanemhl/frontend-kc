import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  public host:string="http://localhost:8284"

  constructor(private http:HttpClient,private cookieService:CookieService,private router: Router) { }

  getBills(){
    if(this.cookieService.get('refresh-token')=='walo'){
      this.router.navigate(['/login']);
    }
    let options = {
      headers: new HttpHeaders().set('authorization', 'Bearer '+this.cookieService.get('access-token'))
  };
    console.log("access-token  bills  :"+this.cookieService.get('access-token'));
    console.log("refresh-token  bills   :"+this.cookieService.get('refresh-token'));
    
    return this.http.get(this.host+"/bills",options);
  }



  getBill(b){

    let options = {
      headers: new HttpHeaders().set('authorization', 'Bearer '+this.cookieService.get('access-token'))
  };

    return this.http.get(this.host+"/fullBill/"+b.id,options);

  }


  
}
