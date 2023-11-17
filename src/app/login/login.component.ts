import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public router : Router){}
  ngOnInit(): void {
    this.load();
  }


  load()
  {
    setTimeout(()=>{
        this.router.navigate(['/start'])
    }, 3000);

  }
}
