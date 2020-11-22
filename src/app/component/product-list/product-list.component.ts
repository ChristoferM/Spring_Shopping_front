import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Product } from 'src/app/domain/product';
import { ProductListService } from 'src/app/service/product-list.service';
import { ViewChild } from '@angular/core'

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
    public productService: ProductListService
  ) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  public showCar(){
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
  public delete_Cart(proId: string): void {
    this.messages = [""];
    console.log("Option delete ");
    console.log(proId);


  }
  public add_Cart(proId: string): void {
    this.messages = [""];
    console.log("Option Add ");
    console.log(proId);


  }
  public findAll(): void {

    this.productService.findAll().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log("Error");
      });
  }
}
