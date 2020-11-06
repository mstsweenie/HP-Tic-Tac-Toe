import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private userService: UserService, private fb: FormBuilder) { }

  signup() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.get("username").value, this.signupForm.get("password").value);
    }
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
    });
  }
}