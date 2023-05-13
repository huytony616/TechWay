import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { fullProduct } from 'src/app/model/fullProduct.model';
import { fullProductE } from 'src/app/model/fullProductE.model';
import { ProductsService } from 'src/app/services/admin/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';


import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { ImageList } from 'src/app/model/imageList.model';
import { ProductDetail } from 'src/app/model/prodLTDetails.model';
import { ProductElseDetail } from 'src/app/model/prodDetails.model';
import { NgForm } from '@angular/forms';
registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    public prodSVC: ProductsService,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) {}

  prod: fullProduct = {
    id: 0,
    product: {
      id: 0,
      productNo: '',
      name: '',
      images: '',
      price: 0,
      available: false,
      category: {
        id: 0,
        categoryNo: '',
        categoryName: '',
      },
      manufacturer: {
        id: 0,
        manufacturerName: '',
      },
      color: {
        id: 0,
        color: '',
      },
    },
    cpu: '',
    core: 0,
    thread: 0,
    cpuSpeed: 0,
    cpuMaxSpeed: 0,
    cache: 0,
    ram: 0,
    type: '',
    busRAM: 0,
    maxRAM: 0,
    ssd: '',
    screenWidth: 0,
    screenResolution: '',
    hz: 0,
    screenTechs: [
      {
        id: 0,
        name: '',
      },
    ],
    screenCard: '',
    sound: '',
  };

  prodE: fullProductE = {
    id: 0,
    product: {
      id: 0,
      productNo: '',
      name: '',
      images: '',
      price: 0,
      available: false,
      category: {
        id: 0,
        categoryNo: '',
        categoryName: '',
      },
      manufacturer: {
        id: 0,
        manufacturerName: '',
      },
      color: {
        id: 0,
        color: '',
      },
    },
    screenTech: {
      id: 0,
      name: '',
    },
    screenResolution: '',
    screenWidth: 0,
    maxLight: '',
    glass: '',
    backCameraResolution: '',
    frontCameraResolution: '',
    flash: 0,
    backCameraFeatures: [
      {
        id: 0,
        name: '',
      },
    ],
    frontCameraFeatures: [
      {
        id: 0,
        name: '',
      },
    ],
    os: '',
    cpu: '',
    cpuSpeed: '',
    gpu: '',
    ram: 0,
    rom: 0,
    romUseable: 0,
    contacts: '',
    mobileNetwork: '',
    sim: '',
    bluetooth: '',
    port: '',
    jackPhone: '',
    pinCapacity: 0,
    pinType: '',
    maxChargingSupport: 0,
    advancedSecurities: [
      {
        id: 0,
        name: '',
      },
    ],
    specialFeatures: [
      {
        id: 0,
        name: '',
      },
    ],
    design: '',
    material: '',
    dimensionAndWeight: '',
  };

  product: any;
  comment:any
  filtersLoaded: Promise<boolean> = Promise.resolve(false);
  imgLst: SlideInterface[] = [];
  selectedProductIndex = 0;
  isLT: boolean = false;

  ngOnInit(): void {
    this.loadDeatail();
  }

  loadDeatail() {
    const pid = this.route.snapshot.paramMap.get('prodId');
    const cid = this.route.snapshot.paramMap.get('catId');

    if (pid && cid) {
      if (Number(cid) == 2) {
        this.isLT = true;
        this.prodSVC.getProdDetail(pid).subscribe(
          (res) => {
            let data = res.product.images.split(">");
            data.splice(data.length-1,1);
            data.forEach(url => {
              this.imgLst.push({url})
            });
            this.product = res;
            console.log(this.product);
            this.filtersLoaded = Promise.resolve(true);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
      } else {
        this.prodSVC.getProdEDetail(pid).subscribe(
          (res) => {
            let data = res.product.images.split(">");
            data.splice(data.length-1,1);
            data.forEach(url => {
              this.imgLst.push({url})
            });
            this.product = res;
            console.log(res);
            this.filtersLoaded = Promise.resolve(true);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
      }
    } else {
      this.snack.open('STW', 'OK', {
        panelClass: ['dg-snackbar'],
        verticalPosition: 'bottom',
      });
    }
  }

  editProd(form:NgForm){

  }
  
}
