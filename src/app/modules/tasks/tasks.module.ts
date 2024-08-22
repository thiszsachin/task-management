import { NgModule } from '@angular/core';
import { TasksRoutingModule } from './tasks-routing.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    LandingComponent

  ],
  exports: [

  ],
  imports:[
    TasksRoutingModule
  ]

})
export class TaskModule { }
