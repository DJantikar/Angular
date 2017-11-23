import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { SigninComponent } from 'app/auth/signin/signin.component';
import { FormsModule } from '@angular/forms';

const authRoutes : Routes=[
  { path : 'signup' ,component : SignupComponent},
  { path : 'signin' ,component : SigninComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
