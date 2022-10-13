import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  template: 
  `<table border=1>
  <tr><td border=1 [attr.colspan]=" 1+1" >One-Two</td></tr>
  <tr><td>three</td><td>four</td></tr>
  <tr><td>five</td><td>six</td></tr>
  </table>`

  ,
  styleUrls: ['./template-binding.component.css']
})
export class TemplateBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
