import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { Product } from 'src/app/domain/product';
import { EnableService } from 'src/app/service/enable.service';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {
  public product:Product;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];


  constructor(
    public productService:ProductListService,
    public enableService: EnableService
  ) { }

  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }
  public save():void{
    this.messages=[""];
    console.log("Option Save ");
    console.log(this.product);
    this.productService.save(this.product).subscribe(
      ok=>{
        this.showMsg=true;
        this.messages[0]="El Product Se grabo Correctamente";
      },
      err=>{
        console.log(err.error.error);
        
        this.showMsg=true;
        this.messages=err.error.error;
        }
    );
    
  }

  ngOnInit(): void {
    this.findAllEnable();
    this.product= new Product("","",0,"","Y","");
  }


}
