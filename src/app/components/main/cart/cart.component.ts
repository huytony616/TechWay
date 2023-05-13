import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/admin/products.service';
import { UserService } from 'src/app/services/user.service';

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public prodSVC: ProductsService) {}

  orderDetails: any;
  cartDetails: any;
  cartItems: any;
  filtersLoaded: Promise<boolean> = Promise.resolve(false);

  ngOnInit(): void {
    this.getCart();
  }

  public getCart() {
    this.prodSVC.getCartByUser().subscribe(
      (res) => {
        this.cartDetails = res;
        this.cartItems = res.cartItems;
        console.log(this.cartItems);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
