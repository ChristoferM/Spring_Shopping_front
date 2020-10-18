import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  public url: string = environment.apiURL + "/api/customer/";
  constructor(public httpClient: HttpClient) {

  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'finByAll');
  }

  public findById(email: string): Observable<any> {
    return this.httpClient.get(this.url + 'finById/' + email);
  }

  public save(customer: Customer): Observable<any> {
    return this.httpClient.post(this.url + 'save', customer);
  }

  public update(customer: Customer): Observable<any> {
    return this.httpClient.put(this.url + 'update', customer);
  }
  public delete(email: string): Observable<any> {
    return this.httpClient.delete(this.url + 'delete/' + email);
  }
}
