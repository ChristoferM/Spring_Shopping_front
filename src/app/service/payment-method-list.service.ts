import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodListService {

  public url:string="http://localhost:9090/api/PayMethod/";
  constructor(
    public httpClient:HttpClient
    ) { }

    public findAll():Observable<any>{
      return this.httpClient.get(this.url + 'findAll');
    }
 
    public findById(payId:Number):Observable<any>{
     return this.httpClient.get(this.url + 'findById/'+ payId);
    }
}
