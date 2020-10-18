import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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


  public findAll():Observable<any>{
    console.log("http://localhost:9090/api/product/finByAll");
    
    return this.httpClient.get(this.url + 'finByAll');
  }

  public findById(proId:string):Observable<any>{
   return this.httpClient.get(this.url + 'finById/'+ proId);
  }

  public save(product: Product): Observable<any> {
    return this.httpClient.post(this.url + 'save', product);
  }

  public update(product: Product): Observable<any> {
    return this.httpClient.put(this.url + 'update', product);
  }
  public delete(proId: string): Observable<any> {
    return this.httpClient.delete(this.url + 'delete/' + proId);
  }
  
}
