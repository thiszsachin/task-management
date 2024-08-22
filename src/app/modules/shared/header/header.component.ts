import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
  userDetails:any=''
  constructor(private router: Router){

  }

  ngOnInit(): void {
      this.userDetails = JSON.parse(localStorage.getItem('userData') || '') 
      // console.log('user', user);
      
      if(this.userDetails){
        this.isLoggedIn = true
      }else{
        this.isLoggedIn = false
      }
  }

  logout(){
    localStorage.removeItem("userData");
    this.router.navigate(['/auth/login']);  
    this.isLoggedIn = false
  }

}
