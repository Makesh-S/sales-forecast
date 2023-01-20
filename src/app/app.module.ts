import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvComponent } from './csv/csv.component';

const appRoute: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'user', component:UserLoginComponent},
  {path:'csv', component:CsvComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    CsvComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }