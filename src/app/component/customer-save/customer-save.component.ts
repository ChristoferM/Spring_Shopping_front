import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {
  public customer:Customer;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];


  constructor(
    public customerService:CustomerService,
    public enableService: EnableService
  ) { }

  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }
  public save():void{
    this.messages=[""];
    console.log("Option Save ");
    console.log(this.customer);
    this.customerService.save(this.customer).subscribe(
      ok=>{
        this.showMsg=true;
        this.messages[0]="Customer Se grabo Correctamente";
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
    this.customer= new Customer("","","Y","","","");
  }

}
