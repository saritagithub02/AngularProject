import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  name: string = 'sAriTA RaTh';
  mySal: number = 5000;
  today = new Date();
  user = { name: 'sarita', id: 1, sal: 5000 };

  // user=[{'name':'sarita','id':1,'sal':5000},
  // {'name':'sarita1','id':2,'sal':6000}];
  arr = [10, 20, 30, 40, 50, 60, 70, 80];
  msg: string = '';
  num: number = 0;
  //const name = new type(arguments);

  ngOnInit(): void {}

  addToArray(a: number) {
    this.arr.push(a);
  }
}
