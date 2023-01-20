import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvComponent } from './csv/csv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{UserLoginComponent}from './user-login/user-login.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'csv',
  component:CsvComponent
  },
  {
    path:'user', 
    component: UserLoginComponent
  },
  {
    path:'',
    component: UserLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
