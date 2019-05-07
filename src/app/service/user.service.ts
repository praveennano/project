import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  getProductsList()
  {
   // console.log("Here is your product");

   return this.http.get("http://localhost:3000/listproducts");
  }

  gerRegister(data:any)
  {
    return this.http.post("http://localhost:3000/register",data);
  }
  userlogin(data:any){
    return this.http.post("http://localhost:3000/login",data);
 
  }
  isLoggedin(){
    return !!localStorage.getItem("token");
  }
}