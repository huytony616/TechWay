import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/admin/products.service';
import { HttpErrorResponse } from '@angular/common/http';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit{

  constructor(
    private prodService: ProductsService,
    private snack: MatSnackBar,
  ){}

  filtersLoaded: Promise<boolean> = Promise.resolve(false);

  displayedColumns: string[] = [
    'id',
    'fullname',
    'address',
    'phone',
    'orderDate',
    'total',
    'shippingStatus',
  ];

  

  dataSource : any;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.prodService.getOrderByUser().subscribe(
      (res) => {
        this.dataSource = res;
        this.filtersLoaded = Promise.resolve(true);
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
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
