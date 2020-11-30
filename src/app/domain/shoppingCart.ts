import { from } from 'rxjs';
import { Customer } from './customer';
import { PaymentMethod } from './payment-method';
import {Enable} from './enable';

export class ShoppingCart {
    constructor(
        public carId:number ,
        public total:number ,
        public  items:number,
        public  customer:string,// Objeto de tipo customer ->FK Email
        //public  customer:Customer,// Objeto de tipo customer ->FK Email
        public paymentMethod:string,// Objeto de tipo PaymentMethod ->FK payID
        //public paymentMethod:PaymentMethod,// Objeto de tipo PaymentMethod ->FK payID
        public enable:Enable ,
      
    ) { }
  
  }
  
  