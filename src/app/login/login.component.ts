import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;

  constructor(private userService: UserService) {
    this.user = userService.authInfo;
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit(): void {
  }

}
