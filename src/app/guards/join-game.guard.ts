import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class JoinGameGuard implements CanActivate {
  constructor(private FS: AngularFirestore, private snackBar: MatSnackBar, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> {
      
      return this.FS.collection('hptic-tac-toe').doc(`${next.params.gameId}`).valueChanges().pipe(
        map(game => {
          
          if(game){
            if (game['users'].length < 2)
            {return true}
          }
          this.snackBar.open("A game with this ID does not exist or the room is full. Try again.", null, {
            duration: 5000,
          })
          this.router.navigate(['/splash'])
          return false;
        })
      );
    }
    
  }