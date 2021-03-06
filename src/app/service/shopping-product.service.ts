import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingProduct } from '../domain/shoppingProduct';
@Injectable({
  providedIn: 'root'
})
export class ShoppingProductService {


  public url: string = environment.apiURL + "/api/shoppingProduct/";
  constructor(
    public httpClient: HttpClient
  ) { }

  createTokenHeader(): HttpHeaders {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({ 'Authorization': token });
    return headers;
  }


  public findAll(): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.get(this.url + 'finByAll', { headers: headers });
  }

  public findById(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.get(this.url + 'findById/' + proId, { headers: headers });
  }

  public save(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.post(this.url + 'save', proId, { headers: headers });
  }

  public update(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.put(this.url + 'update', proId, { headers: headers });
  }
  public delete(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.delete(this.url + 'delete/' + proId, { headers: headers });
  }
  public findAllForEmail(): Observable<any> {
    let headers = this.createTokenHeader();
    console.log(this.url + 'findProductByShpId/' + localStorage.getItem("email"));
    return this.httpClient.get(this.url + 'findProductByShpId/' + localStorage.getItem("email"), { headers: headers });
  }
  public addProducr(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    console.log('->' + this.url + 'addShp/' + localStorage.getItem("carId") + '/' + proId);
    console.log(headers);

    return this.httpClient.get(this.url + 'addShp/' + localStorage.getItem("carId") + '/' + proId, { headers: headers });
  }
  public createCart(): Observable<any> {
    let headers = this.createTokenHeader();
    console.log('->' + this.url + 'createCart/' + localStorage.getItem("email"));
    return this.httpClient.get(this.url + 'createCart/' + localStorage.getItem("email") , { headers: headers });
  }

  public deleteProductStep(idPro: string): Observable<any> {
    console.log('--------------------------------------------------------');
    let headers = this.createTokenHeader();
    // http://localhost:9090/api/shoppingProduct/deleteP/17/APPL693
    console.log(headers);
    console.log('->' + this.url + 'deleteP/' + localStorage.getItem("carId") + '/' + idPro);
    return this.httpClient.get(this.url + 'deleteP/' + localStorage.getItem("carId") + '/' + idPro, { headers: headers });
  }

}
