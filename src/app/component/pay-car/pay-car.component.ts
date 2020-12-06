import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';

@Component({
  selector: 'app-pay-car',
  templateUrl: './pay-car.component.html',
  styleUrls: ['./pay-car.component.css']
})
export class PayCarComponent implements OnInit {


  public tituloPM: string = "metodos de Pago disponibles";
  public paymentMethods: PaymentMethod[];
  @ViewChild(AppComponent) isAdmin: AppComponent;
  public _isAdmin: boolean = false;
  constructor(
    public paymentMethodService: PaymentMethodListService,

    public appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.findAllEnable();

  }

  public PayCar(payId: string): void {
    this.paymentMethodService.PayCart(payId).subscribe(
      data => {
        console.log('bien');
        localStorage.removeItem("");
        localStorage.removeItem("");
        window.location.href = "/product-list";
      },
      error => {
        console.log('Mal');
        window.location.href="/payCar";   
      });
    //window.location.href="/product-list";

  }

  public findAllEnable(): void {
    console.log('FIND ALL ENABLE ');

    if (this.appComponent.isAdmin()) {
      console.log('Es admin');
      this._isAdmin = true;
      this.paymentMethodService.findAll().subscribe(
        data => {
          this.paymentMethods = data;
        },
        error => {
          console.log("Error");
        });

    } else {
      console.log('No es admin');
      this._isAdmin = false;
      this.paymentMethodService.finByAllEnable().subscribe(
        data => {
          this.paymentMethods = data;
        },
        error => {
          console.log("Error DAta Enables");
        });
    }
  }



}
