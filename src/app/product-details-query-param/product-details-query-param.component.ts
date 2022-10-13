import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-query-param',
  templateUrl: './product-details-query-param.component.html',
  styleUrls: ['./product-details-query-param.component.css']
})
export class ProductDetailsQueryParamComponent implements OnInit {
  prodId:any;
  title:any;
  price:any;
  constructor( private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params=>{
this.prodId=params.get('id');
this.title=params.get('name');
this.price=params.get('price');
    })
  }

}
