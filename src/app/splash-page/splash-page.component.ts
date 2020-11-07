import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { JokeService } from '../services/joke.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  gamego: string;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }   //private jokeService: JokeService) { }

  ngOnInit(): void {
    //this.jokeService.getJoke().subscribe((data => {
   //   let ranNum = Math.floor(Math.random() * data.results.length);
     // this.dadJoke = data.results[ranNum].joke;
   // }));
  }
  
  goGame(): void {

  }

  OnInit(): void {
   //this.router.navigate(['/']);
  }
}
