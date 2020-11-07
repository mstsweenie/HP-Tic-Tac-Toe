import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { JokeService } from '../services/joke.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  gamego: string;
  displayName: string = '';

  constructor(private router: Router, private _snackBar: MatSnackBar, private auth: AngularFireAuth) { }   //private jokeService: JokeService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => this.displayName = user ? user.displayName : '');
    //this.jokeService.getJoke().subscribe((data => {
   //   let ranNum = Math.floor(Math.random() * data.results.length);
     // this.dadJoke = data.results[ranNum].joke;
   // }));
  }
  
  goGame(): void {
    if(this.displayName){
      this.router.navigate([`/creategame`])
    } else {
      this._snackBar.open("Must Login to Create New Game", '',{
        duration: 2000,
      })
    }
  }

  OnInit(): void {
   //this.router.navigate(['/']);
  }
}
