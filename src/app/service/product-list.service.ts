import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  public url:string="http://localhost:9090/api/product/";
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

  
}
