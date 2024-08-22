import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";



interface User {
    id: string,
    userName: string,
    userEmail: string,
    userPassword: string
  }

@Injectable({providedIn:'root'})
export class UserService{

    constructor(private http:HttpClient){

    }

    userSignup(data:any){  
        return this.http.post("http://localhost:3000/users", data)
    }

    userLogin(){
        return this.http.get("http://localhost:3000/users")
    }
}