import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes = [
  {path:'', component:LandingComponent, canActivate:[AuthGuard]},
//   {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
