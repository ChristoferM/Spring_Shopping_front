import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { ShoppingProduct } from 'src/app/domain/shoppingProduct';
import { AppComponent } from 'src/app/app.component';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';
import { ShoppingProductService } from 'src/app/service/shopping-product.service';


@Component({
  selector: 'app-pay-shopping-car',
  templateUrl: './pay-shopping-car.component.html',
  styleUrls: ['./pay-shopping-car.component.css']
})
export class PayShoppingCarComponent implements OnInit {

  products: ShoppingProduct[];
  pays: PaymentMethod[];
  public _isAdmin: boolean = false;

  constructor(
    public paymetodosService: PaymentMethodListService,
    public shoppingProductService: ShoppingProductService,
    public appComponent: AppComponent,


  ) { }

  ngOnInit(): void {
    this.showProduct();
    this.products;
    this.showPayMethod();
  }
  public showPayMethod(): void {

    console.log('*********************** cargar los metodos de pago disponibles ');

    this.paymetodosService.findAll().subscribe(
      data => {
        console.log("Pidiendo los METODOS DE PAGO");
        this.pays = data;
      },
      error => {
        console.log(error.error + " Error en la peticion de los metodos de pago");
      });
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
  }
  public showProduct(): void {
    let idCar = localStorage.getItem('shpcId');
    if (this.appComponent.isAdmin) {
      this._isAdmin = true;
      this.shoppingProductService.findById(idCar).subscribe(
        data => {
          console.log("Pidiendo los Registros de productos del carro con ID : " + idCar);
          this.products = data;
        },
        error => {
          console.log("Error en la peticion de los prodcutos del Carro de Compra");
        });

    } else {
      //---------------------------------------------------------------------------
      console.log('*********************** cargar los productos del shopping car');
      this.shoppingProductService.findAllForEmail().subscribe(
        data => {
          console.log("Pidiendo los Registros de productos del carro con ID : " + idCar);
          this.products = data;
        },
        error => {
          console.log("Error en la peticion de los prodcutos del Carro de Compra");
        });

    }

  }
  public mas(proId: string): void {
    console.log('agregar uno');
    this.shoppingProductService.addProducr(proId).subscribe(
      data => {
        console.log('consulta de add ');

      },
      error => {
        console.log("Error en add");
      });
    window.location.reload();
  }
  public menos(proId: string): void {
    console.log('eliminar uno');
    this.shoppingProductService.deleteProductStep(proId).subscribe(
      data => {
        console.log("Eliminardo");
        window.location.reload();
      },
      error => {
        console.log('Error al eliminar ');

      });
    window.location.reload();
  }
}
