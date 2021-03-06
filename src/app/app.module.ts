import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PaymentMethodListComponent } from './component/payment-method-list/payment-method-list.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { PaymentMethodEditComponent } from './component/payment-method-edit/payment-method-edit.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { PaymentMethodSaveComponent } from './component/payment-method-save/payment-method-save.component';
import { LoginComponent } from './component/login/login.component';
import { ShoopingCartComponent } from './component/shooping-cart/shooping-cart.component';
import { PayShoppingCarComponent } from './component/pay-shopping-car/pay-shopping-car.component';
import { PayCarComponent } from './component/pay-car/pay-car.component';
import { RegisterComponent } from './component/register/register.component';
import { environment } from 'src/environments/environment';
import { ResetPassComponent } from './component/reset-pass/reset-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent,
    PaymentMethodListComponent,
    CustomerSaveComponent,
    CustomerEditComponent,
    PaymentMethodEditComponent,
    ProductEditComponent,
    ProductSaveComponent,
    PaymentMethodSaveComponent,
    LoginComponent,
    ShoopingCartComponent,
    PayShoppingCarComponent,
    PayCarComponent,
    RegisterComponent,
    ResetPassComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
