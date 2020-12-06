import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ProductListComponent } from "./component/product-list/product-list.component";
import { PaymentMethodListComponent } from "./component/payment-method-list/payment-method-list.component";
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { PaymentMethodSaveComponent } from './component/payment-method-save/payment-method-save.component';
import { PayShoppingCarComponent } from './component/pay-shopping-car/pay-shopping-car.component';
import { PaymentMethodEditComponent } from './component/payment-method-edit/payment-method-edit.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { LoginComponent } from './component/login/login.component';
import { ShoopingCartComponent } from './component/shooping-cart/shooping-cart.component'
import { AuthGuard } from './guard/auth.guard';
import { PayCarComponent } from './component/pay-car/pay-car.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  
  {path: "paymentMethod-list",component: PaymentMethodListComponent, canActivate:[AuthGuard] },
  {path: "paymentMethod-save",component: PaymentMethodSaveComponent, canActivate:[AuthGuard] },
  {path: "paymentMethod-edit/:payId",component: ShoopingCartComponent, canActivate:[AuthGuard] },

  
  {path: "shooping-cart",component:ShoopingCartComponent , canActivate:[AuthGuard] },
  {path: "EditShoppingCar",component:PayShoppingCarComponent,canActivate:[AuthGuard]},

  {path: "product-list",component: ProductListComponent, canActivate:[AuthGuard] },
  {path: "product-save",component: ProductSaveComponent, canActivate:[AuthGuard] },
  {path: "product-edit/:proId",component: ProductEditComponent, canActivate:[AuthGuard] },

  {path: "customer-list",component: CustomerListComponent, canActivate:[AuthGuard] },
  {path: "customer-save",component:CustomerSaveComponent, canActivate:[AuthGuard] },
  {path: "customer-edit/:email",component:CustomerEditComponent, canActivate:[AuthGuard] },
  {path: "payCar",component:PayCarComponent, canActivate:[AuthGuard] },
  {path: "R-New-User",component:RegisterComponent, canActivate:[AuthGuard] },
  
  {path: "login", component:LoginComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
