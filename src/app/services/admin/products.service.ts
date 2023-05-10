import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  addProd(prod: Product) {
    console.log(prod);
    return this.http.post<Product>(
      'http://localhost:8080/api/v1/products',
      prod
    );
  }

  getAllProd() {
    return this.http.get<Product[]>(
      'http://localhost:8080/api/v1/products/name',{
        headers: this.requestHeader,
      }
    );
  }

  delProd(id: number) {
    return this.http.delete<Product[]>(
      'http://localhost:8080/api/v1/products/' + id
    );
  }

  editProd(prod: Product, id: number) {
    return this.http.put<Product>(
      'http://localhost:8080/api/v1/products/' + id,
      prod
    );
  }
  getScrTech() {
    return this.http.get<[]>('http://localhost:8080/api/v1/screentechs');
  }

  getCamFet() {
    return this.http.get<[]>('http://localhost:8080/api/v1/camera-featurers');
  }

  getSpcFet() {
    return this.http.get<[]>('http://localhost:8080/api/v1/special-features');
  }

  getAdcSec() {
    return this.http.get<[]>('http://localhost:8080/api/v1/advanced-securities');
  }

  addToCart(pid:any){
    return this.http.post<{}>(
      'http://localhost:8080/api/v1/cart/product/'+pid,null
    );
  }
}
