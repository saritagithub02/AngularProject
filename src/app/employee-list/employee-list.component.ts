import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  inputs:['empList']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  empList:any;
  ngOnInit(): void {
  }

}
