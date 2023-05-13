import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit,ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/admin/products.service';
import { UserService } from 'src/app/services/user.service';

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(
    private prodService: ProductsService,
    private snack: MatSnackBar,
    public authSVC: UserService,
    private router: Router
  ){}

  filtersLoaded: Promise<boolean> = Promise.resolve(false);
  FeaLst : any;
  prod: Product = {
    id: -1,
    productNo: '',
    name: '',
    image: '',
    price: 0,
    available: false,
    categoryId: 0,
    manufacturerId: 0,
    colorId: 0,
  };

  
  ngOnInit(): void {
    this.getAllProd();
  }

  public getAllProd() {
    this.prodService.getAllProd().subscribe(
      (res: Product[]) => {
        this.FeaLst = res.slice(0,8);
        this.filtersLoaded = Promise.resolve(true);
        console.log(this.FeaLst);
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

  addToCart(pid:number){
    if(this.authSVC.isLoggedIn()){
      this.prodService.addToCart(pid).subscribe(
        (res) => {
          this.snack.open(
            "Successfully Added This Product To Your Cart !!! \n Let's Buy More",
            'OK',
            {
              panelClass: ['sc-snackbar'],
              verticalPosition: 'bottom',
            }
          );
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
    }else{
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

  getImg(i:any){
    let src = '';
    src = this.FeaLst[i].images.split(">")[0];
    console.log(src);
    return src;
  }

  showProductDetails(pid:any,cid:any) {
    this.router.navigate(['/product', {prodId: pid, catId: cid}]);
  }
  
}
