import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';

@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.css']
})
export class PaymentMethodListComponent implements OnInit {

  public titulo:string= "lista de Productos";
  public paymentMethods:PaymentMethod[];


  constructor(
    public paymentMethodService:PaymentMethodListService
    ) { }

  ngOnInit(): void {
    this.findAll();
  }

  
  public findAll():void{

    this.paymentMethodService.findAll().subscribe(
      data=>{
        this.paymentMethods=data;
      },
      error=>{
        console.log("Error");
      });
   }

}
