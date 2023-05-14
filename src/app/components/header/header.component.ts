import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/admin/products.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authSVC: UserService,
    private prodService: ProductsService,
    private snack: MatSnackBar,
    private router : Router
  ) {}

  CartCount: number = 0;
  CartAmount: number = 0;

  ngOnInit(): void {
    this.getCartInfo();
  }

  logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  getCartInfo() {
    if (this.authSVC.isLoggedIn()) {
      this.prodService.getCartByUser().subscribe(
        (res) => {
          try {
            this.CartCount = res.cartItems.length;
            this.CartAmount = res.totalValue;
          } catch (error) {
            this.CartCount = 0;
            this.CartAmount = 0;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    }
  }

  cart(){
    if (this.authSVC.isLoggedIn()) {
      this.router.navigate(['/cart']);
    } else {
      this.snack.open(
        'Please Login to proceed this action !',
        'OK',
        {
          panelClass: ['dg-snackbar'],
          verticalPosition: 'bottom',
        }
      );
    }
  }
}
