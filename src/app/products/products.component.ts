import { Component, OnInit, ɵɵstylePropInterpolate1 } from '@angular/core';
import * as data from './product.json';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
 products = (data as any).default;
  constructor(private cartService:CartService) {}

  ngOnInit(): void {}
  p: any;
  searchText: string = '';

//  sort grid data according to price
  sortPrice(type:string)
  {
    if(type==='Asc')
    {
      this.products.sort((p1:any,p2: any)=> p1.price -p2.price);
    }else{
      this.products.sort((p1:any,p2: any)=> p2.price -p1.price);
    }
  }

  addProduct(product:any){
    // Swal.fire(	
    //   'Good job!',	
    //   'Product is added to your cart!',	
    //   'success'	
    // )
    this.cartService.addItem(product);
  }
}
