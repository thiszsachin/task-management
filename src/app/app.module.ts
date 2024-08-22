import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './modules/shared/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { TaskModule } from './modules/tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),

    UserModule,
    TaskModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
