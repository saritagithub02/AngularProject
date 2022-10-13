import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems:any[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // subscribe to messages subject-observable
    this.cartService.getCartItem().subscribe((items) => {
      if (items) {
        console.log(items);
        this.cartItems.push(items);
      } else {
        // clear messages when empty message received
        this.cartItems = [];
      }
    });
  }
  clearCart(){    
    this.cartService.clearCart();
  }

}
