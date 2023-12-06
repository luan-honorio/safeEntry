import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.css']
})
export class AcessComponent implements OnInit {
  
  Dados: any;
  Dado : any;
  constructor(public activeRouter : ActivatedRoute){}
 
 
  ngOnInit(): void {
    this.Dado = JSON.parse(this.activeRouter.snapshot.paramMap.get('log') as string)
    this.Dados = JSON.parse(this.Dado);
    console.log(this.Dados)

    }


  
}
