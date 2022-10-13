import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //declare a variable name datatype= string
  name:string="sarita";
  img_url:string="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all";
  img1_url:string="https://www.bairesdev.com/wp-content/uploads/2022/01/programming-languages-1-1024x683.jpg";
  flag:boolean=false;

  //declare an object
  user ={name:'sarita', id:1};

  //declare an array
  cars=['TATA','MARUTI','HONDA'];

//function fired on button click event.
 f1(){
  alert("Button is clicked in f1 function.Event binding");
}

// ToggleText(){
//   if(this.flag){
//     this.flag=false;

//   }else{
//     this.flag=true;
//   }
  
//}
ToggleText(){
  this.flag=!this.flag;
}




//show and hide pwd in textbox
 showPwd:boolean=true; 
 showPassword(){
  this.showPwd=!this.showPwd;
 }

 //ngmodel two input values for addition
 val1:number=0;
 val2:number=0;
 val3:number=0;
//Add two numbers using template reference
add(a:number,b:number)
{
  console.log("Sum is-:"+ (a+ b));
}

//class binding
classFlag:boolean=true;
myClasses = {
  class1 : true,
  class2 : false,
  class3 : true
} 
myFunction(){
  return this.myClasses;
}
 a:string="10";
 b:string="20";
}
