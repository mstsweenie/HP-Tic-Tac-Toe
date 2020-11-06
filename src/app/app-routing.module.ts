import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'board', component: BoardComponent},
  {path: 'splash', component: SplashPageComponent},
  {path: '**', redirectTo: '/splash'}];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
