import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 ,gender:'male'},
    { eId: 104, name: 'deepak', sal: 8000, gender:'male' },
    { eId: 103, name: 'ranjan', sal: 7000,gender:'male' },
    { eId: 102, name: 'manoj', sal: 9000 ,gender:'male'},
    { eId: 105, name: 'Sunita', sal: 9000 ,gender:'female'}
  ];

  val1: any;
  val2: any;
  val3: any;
  //flag: boolean = false;
  flagbtn: boolean = true;
  //delete an employee
  delete(empid: number) {
    this.employees.forEach((value, index) => {
      if (value.eId == empid) this.employees.splice(index, 1);
    });
  }

  //view an emloyee
  view(empid: number) {
    let result = this.employees.find((obj) => {
      return obj.eId == empid;
    });
    // this.val1 = result?.eId;
    // this.val2 = result?.name;
    // this.val3 = result?.sal;
    // this.flag = true; 
   
    Swal.fire({     
      title: 'Employee Details',     
      html: 'Id-:'+result?.eId + '<br>'+ 'Name-:'+result?.name+'</br>'+'salary-:'+result?.sal
      
    })
  }

  //function for edit Employee
  edit(empid: number) {
    // Access the selected employee data from the employee source.
    let result = this.employees.find((obj) => {
      return obj.eId == empid;
    });
    this.val1 = result?.eId;
    this.val2 = result?.name;
    this.val3 = result?.sal;
    //this.flag = false;
    this.flagbtn=false;
  }

  //function for add or update an employee
  add() {
    let result = this.employees.find((obj) => {
      return obj.eId == this.val1;
    });
    // creating an employee object.
    var emp = { 
      eId:this.val1, 
      name:this.val2,
      sal:this.val3,
      gender:'male'
   };
    // For a new employee  id it will insert data and 
    //for existing emp it just update the data
    if (result?.eId == undefined ||result?.eId == 0) {
      this.employees.push(emp);
      Swal.fire(	
        '',	
        'employee is added!',	
        'success'	
      )

    } else {
      let empIndex = this.employees.findIndex(
        (item) => item.eId == this.val1
      );
      this.employees[empIndex] = emp;
      Swal.fire(	
        '',	
        'employee is Updated!',	
        'success'	
      )
      this.flagbtn=true;
    }
    this.val1=0;
    this.val2="";
    this.val3=0;
  }
   //ngFor directive with trackBy
  trackByEmpId(employee: any) {
    return employee.eId;
  }
}
