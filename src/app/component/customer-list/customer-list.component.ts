import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public titulo:string= "lista de clientes";
  public customers:Customer[];

  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(
    public customerService:CustomerService
    ) { }

  ngOnInit(): void {
    this.findAll();
  }
   public findAll():void{

    this.customerService.findAll().subscribe(
      data=>{
        this.customers=data;
      },
      error=>{
        console.log("Error en FINDALL");
      });
   }
   public delete(email:string): void {
    this.messages = [""];
    console.log("**************************** Option delete ");
    console.log(email);
    this.customerService.delete(email).subscribe(
      ok => {
        this.showMsg = true;
        this.messages[0] = "Customer se ha elimino Correctamente";
        this.findAll()
      },
      err => {
        console.log(err.error.error);

        this.showMsg = true;
        this.messages = err.error.error;
      }
    );

  }
  public cambiar(email:string,enable:string):void{
    if (enable == 'Y') {
      this.customerService.switchDisable(email).subscribe(
        ok => {
          console.log(ok);        
        },
        err => {
          console.log(err.error);

        });

    } else {
      console.log('Estado N');
      this.customerService.switchEnable(email).subscribe(
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
