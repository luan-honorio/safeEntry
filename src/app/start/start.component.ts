import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
  
  form = new FormGroup({
    id : new FormControl('', [Validators.required])
  });
  

  constructor(){}
  ngOnInit(): void {

  }
  
  
}
