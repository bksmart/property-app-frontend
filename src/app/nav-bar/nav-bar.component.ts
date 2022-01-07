import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUserName:string;

  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  isUserLoggedIn()
  {
    this.loggedInUserName=localStorage.getItem('token') || '';
    return this.loggedInUserName;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You are logged out!')
  }
}
