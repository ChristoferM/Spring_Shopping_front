import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { AuthCartService } from 'src/app/service/auth-cart.service';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;
  public address: string;
  public enable: string;
  public phone: string;
  public name: string;
  public token: string;
  public msj = "";

  constructor(
    public customerService: CustomerService,
    public authCart: AuthCartService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public registerCustomerBD(_token: string): void {

    this.enable = 'Y';

    console.log('CapturaCustomer para Spring');
    console.log(this.email);
    console.log(this.password);
    console.log(this.address);
    console.log(this.enable);
    console.log(this.name);
    console.log(_token);
    let _customer: Customer;
    _customer = {
      email: this.email,
      address: this.address,
      enable: this.enable,
      name: this.name,
      phone: this.phone,
      token: _token,
    };

    console.log('\n');
    console.log('\n');
    console.log(_customer);
    this.customerService.save(_customer).subscribe(
      ok => {
        console.log('REGISTRADO EN SPRING');

        console.log(ok);
      },
      err => {
        console.log(err.error.error);
        console.log('Error en el registo');
        console.log(err.error);

      }
    );



  }
  public login(): void {
    this.router.navigate(['/login']);

  }
  public registerCustomer(): void {
    this.authCart.createUser(this.email, this.password)
      .then(
        (value) => {
          console.log('Registrado');
          console.log(value + '\n \n');
          console.log(value.user.uid);

          console.log(typeof (value));

          //user.uid
          this.registerCustomerBD(value.user.uid);
          this.router.navigate(['/']);
        }
      )
      .catch(
        e => {

          this.msj = e.message;
        }
      );
  }
}
