import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  //ID -> Customer
  public email: string;
  public customer: Customer;

  public enables: Enable[];

  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public customerService: CustomerService,
    public enableService: EnableService
  ) { }

  ngOnInit(): void {
    let params = this.activatedRouter.params['_value'];
    this.email = params.email;
    this.findById();
    this.findAllEnable();

  }
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }
  public update(): void {
    this.messages = [""];
    console.log("Option Save ");
    console.log(this.customer);
    this.customerService.update(this.customer).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "Customer se ha modificado Correctamente";
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
    console.log(this.customer);
    this.customerService.delete(this.customer.email).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "Customer se ha elimino Correctamente";
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );

  }

  public findById(): void {
    console.log(this.email);
    this.customerService.findById(this.email).subscribe(
      data => {
        this.customer = data;
        console.table(this.customer);


      }
    );
  }

}
