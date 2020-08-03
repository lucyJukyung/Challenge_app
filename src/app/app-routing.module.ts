import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: '~/app/auth/auth.module#AuthModule' },
  {
    path: 'challenges',
    loadChildren: '~/app/challenges/challenges.module#ChallengesModule',
    canLoad: [AuthGuard] //needed to add AuthGuard bc if a user is not autologged in, it will go to /challenges instead of /auth.
  },
  { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full'} //unit 192
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
