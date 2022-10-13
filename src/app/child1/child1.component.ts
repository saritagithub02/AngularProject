import { Component, EventEmitter, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs:['aparent'],
  outputs:['child1','nameEvent','childref']
})
export class Child1Component implements OnInit {
  aparent:any;

  // creating object to math service
  //child1 is dependent on math service.
  //private mathObj:MathService -> dependency injection
  constructor( private mathObj:MathService) { 
    console.log(this.mathObj.add(5,3));
    console.log(this.mathObj.sub(8,4));

    //another way of creating service obj.
    //let mathObj= new MathService();
  }
  
  

  child1=15;
  x:any;
  name='sachin';
  nameEvent= new EventEmitter();
  sendDataToParent(x:any){  
this.nameEvent.emit(this.x);

  } 
  ngOnInit(): void {
  }

}
