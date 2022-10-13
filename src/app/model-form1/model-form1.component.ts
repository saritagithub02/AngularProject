import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-model-form1',
  templateUrl: './model-form1.component.html',
  styleUrls: ['./model-form1.component.css']
})
export class ModelForm1Component implements OnInit {

    myModelForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z]+$")]),
    lastname: new FormControl(),
    email: new FormControl('',[Validators.email,Validators.required]),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address:new FormGroup({
      street:new FormControl(),
      state:new FormControl(),
      city:new  FormControl(),
      pincode:new FormControl()
    })
  })

  get firstname() {
    return this.myModelForm.get('firstname');
  } 

  //firstname: new FormControl('sachin')--> set the default value.
  
  onSubmit() {
    console.log(this.myModelForm.value);
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
