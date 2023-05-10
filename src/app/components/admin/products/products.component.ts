import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ImgBBUploadService } from 'src/app/services/imgbb.service';
import { Product } from 'src/app/model/product.model';
import { ImageList } from 'src/app/model/imageList.model';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/admin/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private prodService: ProductsService,
    private imgbbService: ImgBBUploadService,
    private sanitizer: DomSanitizer
  ) {}
  isAvailabled: boolean = false;
  hh: string = '';
  imgLst: ImageList = { imgItem: [] };
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
  async onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const lght = input.files?.length;
    const field = document.getElementById('inputField');
    const loader = document.getElementById('grLoader');
    const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
    

    if (loader != null && lght != null && lght != 0) {
      field?.setAttribute('disabled', '');
      loader.style.display = 'block';

      for (let i = 0; i < lght; i++) {
        this.imgbbService
          .upload(input.files![i])
          .subscribe((url) => (this.imgLst.imgItem.push(url),(this.hh += url + '>'),this.prod.image += this.hh));
      }

      await sleep(5000);
      field?.removeAttribute('disabled');
      loader.style.display = 'none';
    }
    console.log(this.hh);
  }

  removeImg(i: number) {
    this.imgLst.imgItem.splice(i,1);
    console.log(this.hh);
  }

  addProd(addProdForm: NgForm){
    this.prodService.addProd(this.prod).subscribe(
      (res : Product)=>{
        console.log(res);
        console.log(this.prod)
      }
    );
  }
}
