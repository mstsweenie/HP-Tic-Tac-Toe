import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from './store';
import { getUserName } from './store/selectors';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthGuardService implements CanActivate {

 constructor( public router: Router, private store: Store<RootState>) {}
 canActivate(): Observable<boolean> {
    return this.store.select(getUserName).pipe(
        map(username =>{
            return true;
        })
    )

 }
}

