import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subject = new Subject<any>();

  addItem(product:any) {
    this.subject.next({product });
  }

  clearCart() {
    this.subject.next(null);
  }

  getCartItem(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
