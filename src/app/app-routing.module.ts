import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToBoard = () => redirectLoggedInTo(['board']);

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToBoard } },
  { path: 'board', component: BoardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '**', redirectTo: '/board' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
