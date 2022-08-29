import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.css']
})
export class SubUserComponent implements OnInit {
  constructor() { }
  @Input() No!:number;
  @Input() productN!:string;
  @Input() Qty!:string;

  ngOnInit(): void {
  }

}
