import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  public url: string = environment.apiURL + "/api/customer/";


  
  constructor(public httpClient:HttpClient) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem("token");
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }
  

  public findAll(): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'finByAll',{headers:headers});
    //return this.httpClient.get(this.url + 'finByAll');
  }

  public findById(email: string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'finById/'+email,{headers:headers});
    //return this.httpClient.get(this.url + 'finById/' + email);
  }

  public save(customer: Customer): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',customer,{headers:headers});
    //return this.httpClient.post(this.url + 'save', customer);
  }

  public update(customer: Customer): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',customer,{headers:headers});
    //return this.httpClient.put(this.url + 'update', customer);
  }
  public delete(email: string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+email,{headers:headers});
    //return this.httpClient.delete(this.url + 'delete/' + email);
  }
}
