import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}

  addProd(prod: Product){
    return this.http.post<Product>("http://localhost:8080/products", prod);
  }
}
