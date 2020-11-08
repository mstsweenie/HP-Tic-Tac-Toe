import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authInfo: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authInfo = this.afAuth.authState;
  }
  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        val => this.router.navigate(['/board'])
      });
  }

  logout() {
    this.afAuth.signOut().then(() => { });
  }
}
