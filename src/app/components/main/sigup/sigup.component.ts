import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageList } from 'src/app/model/imageList.model';
import { User } from 'src/app/model/user.model';
import { ImgBBUploadService } from 'src/app/services/imgbb.service';
import { UserService } from "src/app/services/user.service";
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})

export class SigupComponent {
  imgLst: ImageList = { imgItem: [] };

  constructor(
    private imgbbService: ImgBBUploadService,
    private userSVC: UserService,
    private snack: MatSnackBar,
    private router : Router
  ){}
  user : User = {
    id: -1,
    email: '',
    enable: false,
    password: '',
    fullname: '',
    photo: ''
  }

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
          .subscribe((url) => this.imgLst.imgItem.push(url));
      }

      await sleep(5000);
      field?.removeAttribute('disabled');
      loader.style.display = 'none';
    }
  }

  updateImageData() {
    this.user.photo = '';
    for (let i = 0; i < this.imgLst.imgItem.length; i++) {
      this.user.photo += this.imgLst.imgItem[i] + '>';
      console.log(this.user.photo);
    }
  }

  removeImg(i: number) {
    this.imgLst.imgItem.splice(i, 1);
    this.updateImageData();
  }

  signup(signupForm: NgForm){
    console.log(this.user);
    this.updateImageData();
    this.userSVC.signUp(this.user).subscribe(
      (res: any) => {
        this.snack.open(
          'You\'ve registered new account, Please check your email for verification !',
          'OK',
          {
            panelClass: ['sc-snackbar'],
            verticalPosition: 'top',
          }
        );
        this.router.navigate(['/signin']);
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        
        this.snack.open(
          'Fail With Error: ' + err.name + '\n Message: ' + err.message,
          'OK',
          {
            panelClass: ['dg-snackbar'],
            verticalPosition: 'top',
          }
        );
      }
    );
  }
}
