import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userSer: UserService , public route :Router) {


  }
  canActivate(): boolean {
    
    if (this.userSer. isLoggedin()) {
      return true;
      
    }

    else {
     
            this.route.navigateByUrl("/login")
            return false
    }
  }
}



