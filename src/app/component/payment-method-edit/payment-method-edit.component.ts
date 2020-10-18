import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PaymentMethod  } from 'src/app/domain/payment-method';
import {  PaymentMethodListService} from 'src/app/service/payment-method-list.service';
@Component({
  selector: 'app-payment-method-edit',
  templateUrl: './payment-method-edit.component.html',
  styleUrls: ['./payment-method-edit.component.css']
})
export class PaymentMethodEditComponent implements OnInit {
//ID -> PaymentMethod
public payId:number;
public paymentMethod:PaymentMethod;


constructor(
  public router:Router,
  public activatedRouter:ActivatedRoute,
  public PaymentMethodService:PaymentMethodListService,
) { }

ngOnInit(): void {
  let params= this.activatedRouter.params['_value'];
  this.payId=params.payId;
  this.findById();
  
}

public findById():void{
  console.log(this.payId);
  this.PaymentMethodService.findById(this.payId).subscribe(
    data=>{
      this.paymentMethod=data;
      console.table(this.paymentMethod);
      

    }
  );
}

}
