import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ProductListComponent } from "./component/product-list/product-list.component";
import { PaymentMethodListComponent } from "./component/payment-method-list/payment-method-list.component";
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { PaymentMethodSaveComponent } from './component/payment-method-save/payment-method-save.component';
import { PaymentMethodEditComponent } from './component/payment-method-edit/payment-method-edit.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';


const routes: Routes = [
  
  {path: "paymentMethod-list",component: PaymentMethodListComponent},
  {path: "paymentMethod-save",component: PaymentMethodSaveComponent},
  {path: "paymentMethod-edit/:payId",component: PaymentMethodEditComponent},


  {path: "product-list",component: ProductListComponent},
  {path: "product-save",component: ProductSaveComponent},
  {path: "product-edit/:proId",component: ProductEditComponent},

  {path: "customer-list",component: CustomerListComponent},
  {path: "customer-save",component:CustomerSaveComponent},
  {path: "customer-edit/:email",component:CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
