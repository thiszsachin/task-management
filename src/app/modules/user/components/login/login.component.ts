import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _userService:UserService,
    private toastr: ToastrService,
    private router: Router
  ){

  }

  login(userForm:NgForm){
    const userEmailInput = userForm.form.value.userEmail
    const userPasswordInput = userForm.form.value.userPassword

    if(userForm.form.status == "VALID"){

      this._userService.userLogin().subscribe(res => {
       let result:any = res;
       let loginRespnse = ''
       result.forEach((element:any) => {
         if(element.userEmail == userEmailInput){
           if(element.userPassword == userPasswordInput){
            localStorage.setItem("userData", JSON.stringify(element));
            
             loginRespnse = "Logged in Successfully."
             this.router.navigate(['/home']);             
           }else{
             loginRespnse = "Wrong Password."             
           }
          }else{
            loginRespnse = "User not exists."
          }
        });

        if(loginRespnse == "Logged in Successfully."){
          this.toastr.success(loginRespnse)
        } else if(loginRespnse == "Wrong Password."){
          this.toastr.error(loginRespnse)
        }else if(loginRespnse == "User not exists."){
          this.toastr.warning(loginRespnse)
        }
   })
    }
    else{
        this.toastr.error("UserEmail and Password Required!")
    }

    
  }

}
