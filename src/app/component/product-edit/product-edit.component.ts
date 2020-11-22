import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { Product } from 'src/app/domain/product';
import { EnableService } from 'src/app/service/enable.service';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  //ID -> Product
  public proId:string;
  public product:Product;
  public enables: Enable[];
  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(
    public router:Router,
    public activatedRouter:ActivatedRoute,
    public productService:ProductListService,
    public enableService: EnableService
  ) { }

  ngOnInit(): void {
    let params= this.activatedRouter.params['_value'];
    this.proId=params.proId;
    this.findById();
    
  }
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }
  public update(): void {
    this.messages = [""];
    console.log("Option Save ");
    console.log(this.product);
    this.productService.update(this.product).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "product se ha modificado Correctamente";
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );

  }
  public delete(): void {
    this.messages = [""];
    console.log("Option delete ");
    console.log(this.product);
    this.productService.delete(this.product.proId).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "product se ha elimino Correctamente";
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );

  }

  public findById():void{
    console.log(this.proId);
    this.productService.findById(this.proId).subscribe(
      data=>{
        this.product=data;
        console.table(this.product);
        

      }
    );
  }


}
