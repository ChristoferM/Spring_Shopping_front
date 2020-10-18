import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMethod } from '../domain/payment-method';
import { EnableService } from 'src/app/service/enable.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodListService {

  public url:string=environment.apiURL+"/api/PayMethod/";
  
  constructor(
    public httpClient:HttpClient
    ) { }

    public findAll():Observable<any>{
      return this.httpClient.get(this.url + 'findAll');
    }
 
    public findById(payId:Number):Observable<any>{
     return this.httpClient.get(this.url + 'findById/'+ payId);
    }
    
  public save(paymentMethod: PaymentMethod): Observable<any> {
    return this.httpClient.post(this.url + 'save', paymentMethod);
  }

  public update(paymentMethod: PaymentMethod): Observable<any> {
    return this.httpClient.put(this.url + 'update', paymentMethod);
  }
  public delete(payId: string): Observable<any> {
    return this.httpClient.delete(this.url + 'delete/' + payId);
  }
}
