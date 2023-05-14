import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/admin/products.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from "src/app/model/order.model";

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public prodSVC: ProductsService,
    private snack: MatSnackBar,
    private router: Router,
    ) {}

  orderDetails: Order= {cartItems: [
    {
      id: 0,
      quantity: 0,
      product: {
        id: 0,
        name: '',
        price: 0,
        image: '',
      },
    }
  ],
  shipping: 0,
  address: '',
  phone: ''};
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
        console.log(this.cartDetails.totalValue);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  placeOrder(form : NgForm){
    this.orderDetails.cartItems = this.cartItems;
    this.prodSVC.placeOrder(this.orderDetails).subscribe(
      (res) => {
        this.snack.open(
          "Successfully Placed Order !!! \n Please check your email for confirmation",
          'OK',
          {
            panelClass: ['sc-snackbar'],
            verticalPosition: 'bottom',
          }
        );
        this.router.navigate(['/TechWay'])
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        this.snack.open(
          'Fail With Error: ' + err.name + '\n Message: ' + err.message,
          'OK',
          {
            panelClass: ['dg-snackbar'],
            verticalPosition: 'bottom',
          }
        );
      }
    );
  }
}
