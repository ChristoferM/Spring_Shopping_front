import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMethod } from '../domain/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodListService {
  

  public url: string = environment.apiURL + "/api/PayMethod/";

  constructor(
    public httpClient: HttpClient
  ) { }

  createTokenHeader(): HttpHeaders {

    let token=localStorage.getItem("token");
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }


  public findAll(): Observable<any> {
    let headers = this.createTokenHeader();
    console.log(this.url + 'findAll');
    
    return this.httpClient.get(this.url + 'findAll', { headers: headers });
  }
  public finByAllEnable(): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.get(this.url + 'finByAllEnable', { headers: headers });
  }

  public findById(payId: Number): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.get(this.url + 'findById/' + payId, { headers: headers });
  }

  public save(paymentMethod: PaymentMethod): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.post(this.url + 'save', paymentMethod, { headers: headers });
  }

  public update(paymentMethod: PaymentMethod): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.put(this.url + 'update', paymentMethod, { headers: headers });
  }
  public delete(payId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.delete(this.url + 'delete/' + payId, { headers: headers });
  }

  public PayCart(payId:string): Observable<any> {
    let headers = this.createTokenHeader();
    console.log(this.url + 'PayCart/' + payId+'/'+ localStorage.getItem("carId"));
    
    return this.httpClient.get(this.url + 'PayCart/' + payId+'/'+ localStorage.getItem("carId"), { headers: headers });
  }


  public switchEnable(payId: string): Observable<any> {
    let headers = this.createTokenHeader();
    console.log('--------------------------------------------------------------');
    return this.httpClient.get(this.url + 'Enable/' + payId, { headers: headers });
  }

  public switchDisable(payId: string): Observable<any> {
    let headers = this.createTokenHeader();
    console.log('--------------------------------------------------------------');
    
    return this.httpClient.get(this.url + 'Disable/' + payId, { headers: headers });
  }
}
