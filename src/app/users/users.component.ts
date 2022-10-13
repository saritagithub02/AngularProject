import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  val1: any;
  val2:any;
  val3:any;
  flagbtn: boolean = true;
  isLoading:boolean;
  updateUserId:number;

  constructor(private httpObj: HttpClient, private userObj: UserService) {
    this.updateUserId=0;
    this.isLoading=false;
  }
  users: any;
  ngOnInit(): void {
    //let url='https://jsonplaceholder.typicode.com/users ';
    //let userObservable= this.httpObj.get(url);
    //this.userObservable.subscribe((response)=>{
    //  this.users=response;
    //});
    // this.userObj.getUsers().subscribe((response)=>{
    //   this.users=response;
    // });
    this.fetchUser();
  }
  fetchUser() {
    this.isLoading=true;
    this.userObj.getUsers().subscribe((response) => {
      setTimeout(()=>{
        this.users = response;
        this.isLoading=false;
      },2000);
      
    });
  }
  addUser(a: string, b: string, c: string) {
    let newUser = { name: a, email: b, phone: c };
    if(this.flagbtn){
    this.userObj.addUser(newUser).subscribe((response) => {
      this.users = response;
      Swal.fire('user added successfully');
      this.fetchUser();
    });
  }
  else{
    this.userObj.updateUser(newUser,this.updateUserId).subscribe((response)=>{
      Swal.fire("user updated");
      this.val1 = "";
       this.val2 = "";
       this.val3= "";
       this.flagbtn=true; 
       this.updateUserId=0;  
      this.fetchUser();
    })
  }
  }

  deleteUser(id:Number){    
    this.userObj.deleteUser(+id).subscribe((response)=>{
      Swal.fire("User deleted successfully.");
      this.fetchUser();
    })}

    editUser(id:number,name:string,email:string,phone:string){ 
      this.val1 = name;
       this.val2 = email;
       this.val3= phone;
       this.flagbtn=false; 
       this.updateUserId=id;      
      
    }
}
