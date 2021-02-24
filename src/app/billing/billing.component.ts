import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { KeycloackSecurityService } from '../keycloack-security.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public bills;
  public bill;
  public productItems;
  constructor(public KCservice:KeycloackSecurityService,public serviceLogin:LoginService) { }

  ngOnInit(): void {
    
    this.KCservice.getBills().subscribe(data=>{
      this.bills=data;
      
    },err=>{console.log(err["status"]);
    
    this.KCservice.refreshT(); 
      this.ngOnInit();
    
        
})

}

  onGetBill(b){
    
   if(this.bill!=null && this.productItems!=null ){
    this.productItems=null;
    this.bill=null;
   } else{
    this.KCservice.getBill(b).subscribe(data=>{
      this.bill=data;
      this.productItems=data["productItems"];
      console.log(this.bill);
      console.log(this.productItems);
    },err=>{console.log(err["status"]);
    
    this.KCservice.refreshT(); 
      this.onGetBill(b);
    
        
})

}
    
  } 
}
