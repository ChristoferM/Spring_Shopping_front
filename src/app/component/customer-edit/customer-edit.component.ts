import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  //ID -> Customer
  public email:string;
  public customer:Customer;


  constructor(
    public router:Router,
    public activatedRouter:ActivatedRoute,
    public customerService:CustomerService,
  ) { }

  ngOnInit(): void {
    let params= this.activatedRouter.params['_value'];
    this.email=params.email;
    this.findById();
    
  }

  public findById():void{
    console.log(this.email);
    this.customerService.findById(this.email).subscribe(
      data=>{
        this.customer=data;
        console.table(this.customer);
        

      }
    );
  }

}
