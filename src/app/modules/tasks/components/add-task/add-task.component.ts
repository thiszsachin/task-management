import { Component, Inject } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { TasksService } from '../../tasks.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(
    private _taksService:TasksService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private builder:FormBuilder

  ){
    console.log('data', data);
    if(data.type == "Edit"){
      this.taskForm.setValue({
        name: data.data.name,
        description:data.data.description,
        status:data.data.status,
        priority:data.data.priority,
      })
    }
    

  }

  taskForm = this.builder.group({
    name:this.builder.control('', Validators.required),
    description:this.builder.control('', Validators.required),
    status:this.builder.control('', Validators.required),
    priority:this.builder.control('', Validators.required),
  })

  addTask(){
    if(this.data.type == "Add"){
      if(this.taskForm.valid){
        this._taksService.addtasks(this.taskForm.value).subscribe(res => {
          console.log('res add', res);
          this.toastr.success("Task Added Successfully.")
          this.dialogRef.close()
        })
      }
    }else{
      if(this.taskForm.valid){
        this._taksService.updateTask(this.data.data.id, this.taskForm.value).subscribe(res => {
          console.log('res add', res);
          this.toastr.success("Task Updated Successfully.")
          this.dialogRef.close()
        })
      }
    }
  }
  // updateTask(){
  //   console.log('taskForm', this.taskForm);
    
  //   // console.log('formData', formData);
    
  // }
  resetForm(taskForm:NgForm){
    taskForm.resetForm();
  }

}
