import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { AppComponent } from 'src/app/app.component';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';

@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.css']
})
export class PaymentMethodListComponent implements OnInit {

  public titulo: string = "lista de Productos";
  public paymentMethods: PaymentMethod[];
  @ViewChild(AppComponent) isAdmin: AppComponent;
  public _isAdmin: boolean = false;
  constructor(
    public paymentMethodService: PaymentMethodListService,
    public appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.findAll();

  }


  public findAll(): void {
    console.log('FIND ALL');


    this.paymentMethodService.findAll().subscribe(
      data => {
        console.log(data);
        this.paymentMethods = data; 
      },
      error => {
        console.log("Error" + error.error);
      });

    if (this.appComponent.isAdmin()) {
      console.log('Es admin');
      this._isAdmin = true;

    } else {
      console.log('No es admin');
      this._isAdmin = false;
    }

  }

}
