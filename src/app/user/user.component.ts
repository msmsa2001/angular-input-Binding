import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any[]=[
    {No:1,productN:"Mango",Qty:2},
    {No:2,productN:"apple",Qty:3},
    {No:3,productN:"Orange",Qty:6},
    {No:4,productN:"Banana",Qty:7},
  ]
}
