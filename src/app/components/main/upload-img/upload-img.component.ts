import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ImgBBUploadService } from 'src/app/services/imgbb.service';
import { Product } from 'src/app/model/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css'],
})
export class UploadIMGComponent {
  constructor(
    private imgbbService: ImgBBUploadService,
    private sanitizer: DomSanitizer
  ) {}

  prod: Product = {
    available : true,
    img: [],
    category_id: 1,
    manufacturer: 1,
    name: "",
    price:1,
  };

  async onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const lght = input.files?.length;
    const field = document.getElementById('inputField');
    const loader = document.getElementById('grLoader');
    const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
    let hh: string = '';

    if (loader != null && lght != null && lght != 0) {
      field?.setAttribute('disabled', '');
      loader.style.display = 'block';

      for (let i = 0; i < lght; i++) {
        this.imgbbService
          .upload(input.files![i])
          .subscribe((url) => (
            this.prod.img.push(url), 
            (hh += url + '>')
            ));
      }

      await sleep(5000);
      field?.removeAttribute('disabled');
      loader.style.display = 'none';

      console.log(this.prod);
    }
    console.log(hh);
  }

  removeImg(i: number) {
    this.prod.img.splice(i, 1);
    console.log(this.prod);
  }
}
