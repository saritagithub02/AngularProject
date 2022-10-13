import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  inputs:['aparent1','child1','childref']
  
})
export class Child2Component implements OnInit {

  constructor() { }
  aparent1:any;
  childref:any;
  child1:any;
  ngOnInit(): void {
  }

}
