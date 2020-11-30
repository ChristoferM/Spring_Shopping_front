import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string=environment.apiURL+'/login';

  constructor(public httpClient:HttpClient) {}

  public loginUser(user:User):Observable<any>{
    console.log(this.url);
    
    return this.httpClient.post(this.url,user);
  }

  public loggedIn():boolean{
    return !!localStorage.getItem('usuario');
  }

  public logOut():void{
    localStorage.removeItem('usuario');
  }

}
