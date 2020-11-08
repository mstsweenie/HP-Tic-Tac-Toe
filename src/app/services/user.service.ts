import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authInfo: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.authInfo = this.auth.authState;
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      val => this.router.navigate(['/board'])
    ).catch(err => this.router.navigate(['/']))
  }

  logout() {
    this.auth.signOut().then(val => {
      this.router.navigate(['/'])
    }).catch()
  }
}
