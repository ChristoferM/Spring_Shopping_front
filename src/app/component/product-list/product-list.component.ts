import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Product } from 'src/app/domain/product';
import { ProductListService } from 'src/app/service/product-list.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { ViewChild } from '@angular/core'
import { AppComponent } from 'src/app/app.component';
import { ShoppingProductService } from 'src/app/service/shopping-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  public titulo: string = "lista de Productos";
  public products: Product[];

  someMethod() {
    this.trigger.openMenu();

  }

  public showMsg: boolean = false;
  public messages: string[] = [""];
  constructor(
    private router: Router,
    public productService: ProductListService,
    public appcomponent: AppComponent,
    public shoppingCartServicie: ShoppingCartService,
    public shoppingProduct: ShoppingProductService
  ) { }

  ngOnInit(): void {
    this.isAdmin();
    this.findAll();
    console.log("Perfil :" + localStorage.getItem("perfil"));

  }

  private isAdmin(): boolean {
    return this.appcomponent.isAdmin();
  }
  public showCar() {
    console.log('Ver Productos agregados al carro de compras');


  }
  public delete(proId: string): void {
    this.messages = [""];
    console.log("Option delete ");
    console.log(proId);
    this.productService.delete(proId).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "products se ha elimino Correctamente";
        this.findAll()
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );

  }

  public add_Cart(proId: string): void {
    this.messages = [""];
    console.log("Option Add ");
    console.log(proId);
    this.findCarByEmail();
    //-------------------------------------------
    if (localStorage.getItem("carId") == null) {

      //-------------------------------------------
      console.log('CREANDO CARRITO');

      this.shoppingProduct.createCart().subscribe(
        data => {
          console.log('CARRITO CREADO' + data);
        },
        error => {
          console.log("Error AL MOMENTO DE CREAR EL CARRITO");
        });

      //-------------------------------------------
      this.findCarByEmail();
      //-------------------------------------------
      this.addProducr(proId);

    } else {
      //-------------------------------------------
      this.addProducr(proId);

    }

  }
  //-------------------------------------------
  private addProducr(proId: string) {

    console.log('Agregando el producto :_' + proId);

    this.shoppingProduct.addProducr(proId).subscribe(
      data => {
        console.log('consulta de add ');

      },
      error => {
        console.log("Error en add");
      });

  }
  //-------------------------------------------
  private findCarByEmail() {
    console.log('+++++++++++++++++++++++++findCarByEmail');

    this.shoppingCartServicie.findCarByEmail().subscribe(
      data => {
        console.log(data);
        console.log(data[0].carId);
        localStorage.setItem("carId", data[0].carId);
      },
      error => {
        console.log("Error En encontrar el Carrito con el correo" + error);
      });
    console.log('findCarByEmail**********************************' + localStorage.getItem("carId"));

  }
  public findAll(): void {
    console.log('BUSCANDO A TODOS');

    this.productService.findAll().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log("Error");
      });
  }
  public cambiar(proId: string, enable: string): void {
    if (enable == 'Y') {
      this.productService.switchDisable(proId).subscribe(
        ok => {
          console.log(ok);
        },
        err => {
          console.log(err.error);

        });

    } else {
      this.productService.switchEnable(proId).subscribe(
        ok => {
          console.log(ok);
        },
        err => {
          console.log(err.error);

        });
    }
    window.location.reload();
  }

  
}
