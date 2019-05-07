import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { CatageryComponent } from './catagery/catagery.component';
import { ListComponent } from './product/list/list.component';
import { FooterComponent } from './Footert/footer/footer.component';

import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthGuard } from './auth.guard';

const myRoutes : Routes = [
{ path : '' , component : ListComponent},
{ path : 'login' , component : LoginComponent},
{path : 'addproduct' , component : AddproductComponent ,canActivate:[AuthGuard]},
{ path : '**' , component : NotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatageryComponent,
    ListComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
