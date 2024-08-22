import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";




@Injectable({providedIn:'root'})
export class TasksService{

    constructor(private http:HttpClient){

    }

    addtasks(data:any){  
        // return this.http.post("http://localhost:3000/users", data)
    }

    getTasks(){
        // return this.http.get("http://localhost:3000/users")
    }
}