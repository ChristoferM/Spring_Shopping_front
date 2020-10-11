import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ProductListComponent } from "./component/product-list/product-list.component";
import { PaymentMethodListComponent } from "./component/payment-method-list/payment-method-list.component";


const routes: Routes = [
  {path: "customer-list",component: CustomerListComponent},
  {path: "paymentMethod-list",component: PaymentMethodListComponent},
  {path: "product-list",component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
