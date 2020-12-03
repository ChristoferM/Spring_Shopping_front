import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingProduct } from '../domain/shoppingProduct';
@Injectable({
  providedIn: 'root'
})
export class ShoppingProductService {
  
  public url:string=environment.apiURL+"/api/shoppingProduct/";
  constructor(
    public httpClient:HttpClient
  ) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem("token");
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  
  public findAll():Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url + 'finByAll',{headers:headers});
  }

  public findById(proId:string):Observable<any>{
    let headers=this.createTokenHeader();
   return this.httpClient.get(this.url + 'finById/'+ proId,{headers:headers});
  }

  public save(proId:string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url + 'save', proId,{headers:headers});
  }

  public update(proId:string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.put(this.url + 'update', proId,{headers:headers});
  }
  public delete(proId:string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.delete(this.url + 'delete/' + proId,{headers:headers});
  }
  public findAllForEmail(): Observable<any> {
    let headers=this.createTokenHeader();
    console.log(this.url + 'findProductByShpId/' + localStorage.getItem("email"));
    return this.httpClient.delete(this.url + 'findProductByShpId/' + localStorage.getItem("email"),{headers:headers});
  }
  
  
}
