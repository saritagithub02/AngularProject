import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  n:number=0;
  cars:string[]=['Maruti', 'TATA','HONDA','HUNDAI','BMW','TOYOTA'];
  employees = [
    { eId: 101, name: "sanjay", sal: 5000,add:{city:'BLR',state:'KA'} },
    { eId: 104, name: "deepak", sal: 8000 , add:{city:'pune',state:'MA'}},
    { eId: 103, name: "ranjan", sal: 7000 ,add:{city:'Hyd',state:'TL'}},
    { eId: 102, name: "manoj", sal: 9000 }
  ]

}
