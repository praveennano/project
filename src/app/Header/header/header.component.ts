import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userSer:UserService,public myrouter:Router) { }

  ngOnInit() {
  }
dologout(){
  localStorage.removeItem("token");
  this.myrouter.navigateByUrl("/login");
}
}
