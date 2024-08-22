import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface User {
  id: string,
  userName: string,
  userEmail: string,
  userPassword: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private _userService:UserService,
    private router: Router,
    private toastr: ToastrService

  ){

  }

  ngOnInit(): void {

      
  }

  signUp(formData:NgForm){
    const userNameInput = formData.form.value.userName
    const userEmailInput = formData.form.value.userEmail
    const userPasswordInput = formData.form.value.userPassword
    
    const userInfo = {
      userName:userNameInput,
      userEmail:userEmailInput,
      userPassword:userPasswordInput,
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozMjUsInVzZXJuYW1lIjoiU2F5YW5yYWogR3VoYSIsInJvbGVfbmFtZSI6WyJCdXllcnMiLCJBdXRob3IiXSwidGVuYW50aWQiOjgsImlhdCI6MTcyMzAyMTIzOH0.PX3lad_xwCxb3FAwChyvnIsIx8trQtlLQW9_qPB10AY'
    }

    if(formData.form.status == "VALID"){
      this._userService.userSignup((userInfo)).subscribe(res => {
        this.toastr.success("User Registered Successfully.")
        this.router.navigate(['/auth/login']);      
      })
    }else{
      this.toastr.error("All fields are required.")
    }
  }
}
