import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private api_url='https://jsonplaceholder.typicode.com/users ';
 private api_url='http://localhost:3000/users';
  constructor(private http:HttpClient) { 
   
  }

  //Get all the user data from api.
  getUsers(){    
    return this.http.get(this.api_url);
  }

  //Get all the user data from api using id.
  getSelectedUser(id:number){    
    return this.http.get(`${this.api_url}/${id}`);
  }

  //Add a new user
  addUser(userObj:any){    
    return this.http.post(this.api_url,userObj);
  }

  //Delete an existing user
  deleteUser(id:number){
    //alert("service-"+id);
    return this.http.delete(`${this.api_url}/${id}`);
  }

  //Update an user
  // updateUser(userObj:any,id:number){   
  //   return this.http.put(`${this.api_url}/${id}`,userObj);   
  // }
  updateUser(userObj:any,id:number){   
    return this.http.patch(`${this.api_url}/${id}`,userObj);   
  }
}
