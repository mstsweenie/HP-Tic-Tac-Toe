import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private userService: UserService, private fb: FormBuilder) { }

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.get("username").value, this.loginForm.get("password").value);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
    });
  }
}