import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'cart-front';
  sesion=localStorage.getItem('perfil');
  public isAdmin(): boolean {
    if (localStorage.getItem('perfil') == 'admin') {
      return true;
    } else {
      return false;
    }
  }


  public isAuth(): boolean {
    return !!localStorage.getItem('usuario');
    /*
    --> Froma Tradicional de Hacrlo
    if(localStorage.getItem('usuario')){
      return true;
      else{
        return false;
      }
    }*/

  }
}
