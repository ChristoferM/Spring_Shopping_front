import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/domain/shoppingCart';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})

export class ShoopingCartComponent implements OnInit {

  public Cabecera: string = "";
  public cars: ShoppingCart[];
  constructor(
    public ShoppingCarService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.findAllDDisablesEnables();
  }
  public findAllDisables(): void {
    this.Cabecera = "Historial de compras";
    console.log('BUSCANDO A LOS CARRITOS DE COMPRA YA PAGADOS ');

    /* this.productService.findAll().subscribe(
       data => {
         this.products = data;
       },
       error => {
         console.log("Error");
       });*/
  }
  public findAllDDisablesEnables(): void {
    console.log('BUSCANDO A LOS CARRITOS DE COMPRA por pagar ');
    this.Cabecera = "Carrito de compra";
    this.ShoppingCarService.findAllEnables().subscribe(
      data => {
        console.log("Pidiendo los Registros de Carro de compra");
        this.cars = data;
      },
      error => {
        console.log("Error en la peticion de los carritos Activos");
      });

  }
  public payCar(shpcId: string):void{
    console.log("Pagar el Shopping Car  ID: "+shpcId);
    window.location.href="/payShoppingCar";
    
  }

  public editCar(shpcId: string): void {
    console.log('Editar los productos del shopping Car ID: '+shpcId );


  }
}
