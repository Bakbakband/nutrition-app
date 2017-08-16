import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';

const authRoutes: Routes = [
	{ path: 'signup', component: SignUpComponent },
	{ path: 'login', component: SignInComponent }
];

@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}