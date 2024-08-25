import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {  Observable } from "rxjs";
import {Task} from './models/taskModel'

@Injectable({providedIn:'root'})
export class TasksService{

    constructor(private http:HttpClient){

    }

    getTasks():Observable<Task[]>{
        return this.http.get<Task[]>("http://localhost:3000/tasksList")
    }

    addtasks(data:any){  
        return this.http.post("http://localhost:3000/tasksList", data)
    }
    getTaskById(id:any){  
        return this.http.get("http://localhost:3000/tasksList/"+id)
    }
    deleteTaskById(id:any){  
        return this.http.delete("http://localhost:3000/tasksList/"+id)
    }
    updateTask(id:any, data:any){  
        return this.http.put("http://localhost:3000/tasksList/"+id, data)
    }
}