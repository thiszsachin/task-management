import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/tasks/tasks.module').then(
        (m) => m.TaskModule
      )
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/user/user.module').then(
        (m) => m.UserModule
      )
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
