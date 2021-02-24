import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

import { KeycloackSecurityService } from './keycloack-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAdmin:boolean;
  
  ngOnInit(): void {
    
  this.isAdmin=this.kcService.kc.hasRealmRole("data-manager");
  }
  constructor(public kcService:KeycloackSecurityService){}
  onLogout() { this.kcService.kc.logout(); }
  initBills(){this.kcService.initBills();}
  onChangePassword() { this.kcService.kc.accountManagement(); }
  onLogin() { this.kcService.kc.login(); }
  }