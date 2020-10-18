import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
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


  constructor(
    public router:Router,
    public activatedRouter:ActivatedRoute,
    public productService:ProductListService,
  ) { }

  ngOnInit(): void {
    let params= this.activatedRouter.params['_value'];
    this.proId=params.proId;
    this.findById();
    
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
