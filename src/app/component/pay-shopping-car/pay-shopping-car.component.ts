import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { Product } from 'src/app/domain/product';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-pay-shopping-car',
  templateUrl: './pay-shopping-car.component.html',
  styleUrls: ['./pay-shopping-car.component.css']
})
export class PayShoppingCarComponent implements OnInit {

  products: Product[];
  pays: PaymentMethod[];

  constructor(
    public paymetodosService: PaymentMethodListService,
    public productsService: ProductListService
  ) { }

  ngOnInit(): void {
    this.showProduct();
  }

  public showProduct(): void {

    console.log('*********************** cargar los metodos de pago disponibles ');
    let idCar = "15";
    this.paymetodosService.findAll().subscribe(
      data => {
        console.log("Pidiendo los METODOS DE PAGO");
        this.pays = data;
      },
      error => {
        console.log("Error en la peticion de los metodos de pago");
      });

    console.log('*********************** cargar los productos del shopping car');
    this.productsService.findAll().subscribe(
      data => {
        console.log("Pidiendo los Registros de productos del carro con ID : " + idCar);
        this.products = data;
      },
      error => {
        console.log("Error en la peticion de los prodcutos del Carro de Compra");
      });

  }


}
