import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../../tasks.service';
import {Task} from '../../models/taskModel'
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  taskList!:Task[];
  dataSource:any;
  displayedColumns:string[]=["name", "description", "status", "priority", "actions"]
  @ViewChild(MatPaginator) paginator!:MatPaginator

  constructor(
    private _taksService:TasksService,
    private dialog:MatDialog,
  ){

  }
  ngOnInit(): void {
    this.getTask()
      
  }

  getTask(){
    this._taksService.getTasks().subscribe(res => {
      this.taskList = res;
      this.dataSource = new MatTableDataSource<Task>(this.taskList)
      this.dataSource.paginator = this.paginator
      
    })

  }

  addTask(){
    let addDialog = this.dialog.open(AddTaskComponent,{
      width:'40%',
      data:{
        type:"Add",
        data:null
      }
    })

    addDialog.afterClosed().subscribe(item =>{
      this.getTask()
    })

  }

  editTask(rowData:any){
    let addDialog = this.dialog.open(AddTaskComponent,{
      width:'40%',
      data:{
        type:"Edit",
        data:rowData
      }
    })

    addDialog.afterClosed().subscribe(item =>{
      this.getTask()
    })
  }
  deleteTask(rowData:any){
    console.log('rowData', rowData);
    
    this._taksService.deleteTaskById(rowData.id).subscribe(res => {
      console.log('res', res);
      this.getTask()
      
      // this.taskList = res;
      // this.dataSource = new MatTableDataSource<Task>(this.taskList)
      
    })
  }

}
