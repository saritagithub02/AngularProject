import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  
})
export class ParentComponent implements OnInit {

  constructor() { }

  a=10;
  product:any;
  getDataFromChild(data:any){
this.product=data;
  }
  ngOnInit(): void {
  }

}
