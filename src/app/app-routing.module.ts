import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "billing",
    component: BillingComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
