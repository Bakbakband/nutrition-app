import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
	declarations: [
		SignInComponent,
		SignUpComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AuthRoutingModule
	]
})
export class AuthModule {}