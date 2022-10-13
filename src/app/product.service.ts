import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProductDetails(id:number){
    return this.httpClient.get(`https://dummyjson.com/products/${id}`);

  }
}
