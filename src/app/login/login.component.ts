import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;
  constructor(public userServ: UserService, public myRoute: Router) { }

  ngOnInit() {

    $('.toggle').click(function () {
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });

  }
  doRegister(form: NgForm) {
    this.userServ.gerRegister(form.value).subscribe((data: any) => {
      console.log(data);
      this.msg = data;
      form.reset();
    }, (error: any) => {
        console.log(error);
        this.msg = "error";
      });
  }
  dologin(form: NgForm) {
    this.userServ.userlogin(form.value).subscribe((data: any) => {
      console.log(data);
      if (data.length > 0) {
        localStorage.setItem("token", data[0]._id);
        this.myRoute.navigateByUrl("/");
      }
      else {
        this.msg = "invalid login";
      }
    }, (error: any)=> {
      console.log(error);
  });
}

}
