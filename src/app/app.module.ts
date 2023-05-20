import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProductComponent } from './components/main/product/product.component';
import { SigninComponent } from './components/main/signin/signin.component';
import { SigupComponent } from './components/main/sigup/sigup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UploadIMGComponent } from './components/main/upload-img/upload-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsComponent } from './components/admin/products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { ImageSliderModule } from './imageSlider/imageSlider.module'
import {MatTableModule} from '@angular/material/table';


import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { AuthGuard } from 'src/app/_auth/auth.guard';
import { UserService } from 'src/app/services/user.service';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { CartComponent } from './components/main/cart/cart.component';
import {MatSelectModule} from '@angular/material/select';
import { OrderComponent } from './components/main/order/order.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    SigninComponent,
    SigupComponent,
    UploadIMGComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatButtonModule,
    ImageSliderModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
