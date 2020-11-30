import { Product } from './product';
import { ShoppingCart } from './shoppingCart';

export class ShoppingProduct {

    constructor(
        public  shprId:number,
        public product:Product, // Objeto de tipo Product ->FK proId
        public  shoppingCart:ShoppingCart,// Objeto de tipo ShoppingCart ->FK carId
        public  quantity:number,
        public  total:number,
    ) { }
  
  }