import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { Enable } from 'src/app/domain/enable';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodListService } from 'src/app/service/payment-method-list.service';

@Component({
  selector: 'app-payment-method-save',
  templateUrl: './payment-method-save.component.html',
  styleUrls: ['./payment-method-save.component.css']
})
export class PaymentMethodSaveComponent implements OnInit {
  public paymentMethod:PaymentMethod;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];


  constructor(
    public paymentMethodService:PaymentMethodListService,
    public enableService: EnableService
  ) { }

  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }
  public save():void{
    this.messages=[""];
    console.log("Option Save ");
    console.log(this.paymentMethod);
    this.paymentMethodService.save(this.paymentMethod).subscribe(
      ok=>{
        this.showMsg=true;
        this.messages[0]="paymentMethod nuevo Se grabo Correctamente";
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
    this.paymentMethod= new PaymentMethod(0,"Y","");
  }

}
