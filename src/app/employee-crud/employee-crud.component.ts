import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 ,gender:'male'},
    { eId: 104, name: 'deepak', sal: 8000, gender:'male' },
    { eId: 103, name: 'ranjan', sal: 7000,gender:'male' },
    { eId: 102, name: 'manoj', sal: 9000 ,gender:'male'},
    { eId: 105, name: 'Sunita', sal: 9000 ,gender:'female'},
    { eId: 106, name: 'Anita', sal: 9000 ,gender:'female'}
  ];

  //collecting emp data and add it to the employees array using event emmitor.
  getDataFromChild(data:any){   
    this.employees.push(data);
      }
}
