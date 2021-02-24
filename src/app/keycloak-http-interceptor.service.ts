import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloackSecurityService} from "./keycloack-security.service";
@Injectable({
providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor{
constructor(private kcService:KeycloackSecurityService) { }
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log("Interceptor"+req);
if(!this.kcService.kc.authenticated) return next.handle(req);
let request=req.clone({
setHeaders: {
Authorization: 'Bearer '+this.kcService.kc.token
}
});
console.log(request);
return next.handle(request);
}
}
