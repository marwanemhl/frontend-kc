import { Component, OnInit } from '@angular/core';
import { KeycloackSecurityService } from '../keycloack-security.service';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public products;
  public customers;
  constructor(public KCservice:KeycloackSecurityService,public serviceLogin:LoginService) { }

  ngOnInit(): void {
    
  }

   onGetProducts(){
    this.customers=null;
    this.KCservice.getProducts().subscribe(data=>{
      this.products=data;
      
      },err=>{console.log(err,"daz hna");
      this.KCservice.refreshT();             
      this.onGetProducts();  
        
    })
  
   }
   
  
  onGetCustomers(){
    this.products=null
    this.KCservice.getCustomers().subscribe(data=>{
      this.customers=data;
      },err=>{console.log(err["status"]);
      this.KCservice.refreshT(); 
        this.onGetCustomers();
      

      
    
  })

 } 
}
