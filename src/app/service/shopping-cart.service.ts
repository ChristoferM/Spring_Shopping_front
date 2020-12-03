import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../domain/shoppingCart';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public url: string = environment.apiURL + "/api/shoppingCart/";
  constructor(
    public httpClient: HttpClient
  ) { }

  createTokenHeader(): HttpHeaders {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({ 'Authorization': token });
    return headers;
  }

  public findAllEnables(): Observable<any> {
    let headers = this.createTokenHeader();
    console.log(this.url);
    return this.httpClient.get(this.url + 'findAll', { headers: headers });
  }


  public findAllDisable(): Observable<any> {
    let headers = this.createTokenHeader();
    console.log(this.url);
    return this.httpClient.get(this.url + 'finByAll', { headers: headers });
  }


  public createShoppingCart(email: string): Observable<any> {
    let headers = this.createTokenHeader();
    //console.log("http://localhost:9090/api/product/finByAll");

    return this.httpClient.get(this.url + '/' + email, { headers: headers });
  }

  public findCarByEmail(): Observable<any> {
    let headers = this.createTokenHeader();
    //let user=JSON.parse(localStorage.getItem("email"));
    //console.log(user.username);
    console.log('->' + this.url + 'findByEmail/' + localStorage.getItem("email"));
    return this.httpClient.get(this.url + 'findByEmail/' + localStorage.getItem("email"), { headers: headers });
  }


  public createCar(): Observable<any> {
    let headers = this.createTokenHeader();
    //let user=JSON.parse(localStorage.getItem("email"));
    //console.log(user.username);
    console.log('->' + this.url + 'save/' + localStorage.getItem("email"));
    return this.httpClient.get(this.url + 'save/' + localStorage.getItem("email"), { headers: headers });
  }
  public addProducr(idPro: string): Observable<any> {
    let headers = this.createTokenHeader();
    //let user=JSON.parse(localStorage.getItem("email"));
    //console.log(user.username);
    console.log('->' + this.url + 'addShp/' + localStorage.getItem("carId") + '/' + idPro);
    return this.httpClient.get(this.url + 'addShp/' + localStorage.getItem("carId") + '/' + idPro, { headers: headers });
  }

  public deleteProductStep(idPro: string){
    let headers = this.createTokenHeader();
    //let user=JSON.parse(localStorage.getItem("email"));
    //console.log(user.username);
    // http://localhost:9090/api/shoppingProduct/deleteP/17/APPL693
    console.log('->' + this.url + 'addShp/' + localStorage.getItem("carId") + '/' + idPro);
    return this.httpClient.get(this.url + 'addShp/' + localStorage.getItem("carId") + '/' + idPro, { headers: headers });
  }

}
