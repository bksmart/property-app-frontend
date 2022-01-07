import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService
              ,private alertify:AlertifyService
              ,private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm)
  {
    var userToken=this.authService.authenticate(loginForm.value);
    if(userToken)
    {
      localStorage.setItem('token',userToken.userName);
      this.alertify.success('Your login is successful');
      this.router.navigate(["/"]);
    }
    else{
      this.alertify.error('Sorry! your credentials does not match');
    }

  }
}
