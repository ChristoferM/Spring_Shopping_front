import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public titulo:string= "lista de Productos";
  public products:Product[];

  constructor(
    public productService:ProductListService
    ) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{

    this.productService.findAll().subscribe(
      data=>{
        this.products=data;
      },
      error=>{
        console.log("Error");
      });
   }
}
