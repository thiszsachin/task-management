import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  exports: [
    SignupComponent,
    LoginComponent
  ],
  imports:[
    FormsModule,
    UserRoutingModule
  ]

})
export class UserModule { }
