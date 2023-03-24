import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ProductComponent } from './components/main/product/product.component';
import { SigninComponent } from './components/main/signin/signin.component';
import { SigupComponent } from './components/main/sigup/sigup.component';
import { UploadIMGComponent } from './components/main/upload-img/upload-img.component';
import { ProductsComponent } from './components/admin/products/products.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'login',component:SigninComponent},
  {path:'signup',component:SigupComponent},
  {path:'up',component:UploadIMGComponent},
  {path:'products',component:ProductsComponent},
  {path:'',component:HomeComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
