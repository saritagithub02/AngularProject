import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  firstName:any;
  cityId = "City";
  stateId = "State";

  constructor() { }

  ngOnInit(): void {
  }
  submitMyForm(formdata:NgForm){
    console.log(formdata);
  }
}
