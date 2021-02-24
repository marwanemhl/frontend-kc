import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public username;
public password;


  constructor(private oauthService: OAuthService,public serviceLogin:LoginService,private cookieService:CookieService,private router: Router,public main: AppComponent) {
    this.configure();
   }

  ngOnInit(): void {

       

  }



  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/my-ecom-realm',
    redirectUri: window.location.origin + "/my-ecom-realm",
    clientId: 'products-app',
    scope: 'openid profile email offline_access my-ecom-realm',
    responseType: 'code',
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true
  }


  public login() {
    this.oauthService.initLoginFlow();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  authenticate(form){
    this.username=form.login;
    this.password=form.password;
    console.log(form);
    this.serviceLogin.login(form).subscribe(data=>{
      console.log(data);
      this.serviceLogin.getToken(data["refresh-token"],data["access-token"]);
      
      console.log("access-token :::",this.cookieService.get('access-token'));
      
      this.router.navigate(['/users']);
      },err=>{console.log(err);})
      
      
  }
  

}
