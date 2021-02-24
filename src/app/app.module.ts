import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { BillingComponent } from './billing/billing.component';
import { UtilComponent } from './util/util.component';
import {KeycloackSecurityService} from "./keycloack-security.service";
import { KeycloakHttpInterceptorService } from './keycloak-http-interceptor.service';

export function kcFactory(kcSecService:KeycloackSecurityService) {
  return ()=>kcSecService.init();
  }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    BillingComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    { provide:APP_INITIALIZER, deps:[KeycloackSecurityService], useFactory:kcFactory, multi:true },
    { provide:HTTP_INTERCEPTORS, useClass:KeycloakHttpInterceptorService, multi:true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
