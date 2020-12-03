import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../domain/product';
import { EnableService } from 'src/app/service/enable.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  public url:string=environment.apiURL+"/api/product/";
  
  constructor(
    public httpClient:HttpClient
  ) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem("token");
    let headers=new HttpHeaders({'Authorization':token});
    console.log('Wl toke es : '+token);
    
    return headers;
  }


  public findAll():Observable<any>{
    let headers=this.createTokenHeader();
    console.log("http://localhost:9090/api/product/finByAll");
    console.log(this.url);
    
    
    return this.httpClient.get(this.url + 'finByAll',{headers:headers});
  }

  public findById(proId:string):Observable<any>{
    let headers=this.createTokenHeader();
   return this.httpClient.get(this.url + 'finById/'+ proId,{headers:headers});
  }

  public save(product: Product): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url + 'save', product,{headers:headers});
  }

  public update(product: Product): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.put(this.url + 'update', product,{headers:headers});
  }
  public delete(proId: string): Observable<any> {
    let headers=this.createTokenHeader();
    return this.httpClient.delete(this.url + 'delete/' + proId,{headers:headers});
  }
  public switchEnable(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.delete(this.url + 'Enable/' + proId, { headers: headers });
  }

  public switchDisable(proId: string): Observable<any> {
    let headers = this.createTokenHeader();
    return this.httpClient.delete(this.url + 'Disable/' + proId, { headers: headers });
  }
  
}
