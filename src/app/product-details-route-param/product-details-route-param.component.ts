import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details-route-param',
  templateUrl: './product-details-route-param.component.html',
  styleUrls: ['./product-details-route-param.component.css']
})
export class ProductDetailsRouteParamComponent implements OnInit {

  prodId:number=0;
  productObj:any;
  constructor( private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {   
    this.activatedRoute.params.subscribe((params)=>{
      this.prodId=params['id'];      
    });
    this.activatedRoute.data.subscribe((response:any)=>{ 
      this.productObj=response.productDetail;
      console.log(this.productObj);
    });
  }
}
