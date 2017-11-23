import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from 'app/auth/signin/signin.component';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'app/auth/auth-routing.module';
import { AuthGuard } from 'app/auth/auth-guard.service';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers:[AuthGuard]
})
export class AuthModule { }
