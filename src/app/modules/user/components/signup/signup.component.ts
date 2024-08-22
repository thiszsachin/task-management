import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';

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
  constructor(private _userService:UserService){

  }

  ngOnInit(): void {

      
  }

  signUp(formData:NgForm){
    console.log('formData....', formData);
    const userNameInput = formData.form.value.userName
    const userEmailInput = formData.form.value.userEmail
    const userPasswordInput = formData.form.value.userPassword
    
    
    const userInfo = {
      userName:userNameInput,
      userEmail:userEmailInput,
      userPassword:userPasswordInput
    }
    console.log('userInfo', userInfo);

    // this._userService.userSignup((userInfo)).subscribe(res => {
    //   console.log('res', res);
      
    // })
    this._userService.userLogin().subscribe(res => {
      let result:any = res;
      result.forEach((element:any) => {
          if(element.userName == "Sachfgdin"){
            if(element.userPassword == "zesxfcffdc"){
              console.log("USER lOGIN iN");
              
            }else{
              console.log('Wrong passwrod');
              
            }
          }else{
            console.log('User not exists');
            
          }
      });
      console.log('res', res);
      
    })
  }

}
