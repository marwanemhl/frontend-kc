import { Injectable } from '@angular/core'; 
import {KeycloakInstance} from "keycloak-js";
import {HttpClient, HttpHeaders} from "@angular/common/http";
declare var Keycloak: any;
@Injectable({ providedIn: 'root'})
export class KeycloackSecurityService {
   public kc:KeycloakInstance;
   constructor(private http:HttpClient) {}

   public async init(){
     console.log("Test Initialisation");
     this.kc=new Keycloak({
       url:"http://localhost:8080/auth",
       realm:"my-ecom-realm",
       clientId:"products-app"
     });
     await this.kc.init({
//onLoad:"login-required",
       onLoad:"check-sso",
       //promiseType:"native"
     });
     console.log("access   :"+this.kc.token);
     console.log("refresh      :"+this.kc.refreshToken);
    }
    public refreshT(){
      this.kc.updateToken(-1);   
           
    }
public getProducts(){
    return this.http.get("http://localhost:8283/products");
}
public getCustomers(){
  return this.http.get("http://localhost:8282/customers");
}

public getBills(){
  return this.http.get("http://localhost:8284/bills");
}

public initBills(){
  return this.http.get("http://localhost:8284/initbills");
}

public getBill(b){
  return this.http.get("http://localhost:8284/fullBill/"+b.id);
}

public isManager():boolean{ return this.kc.hasResourceRole("data-manager"); }
}
