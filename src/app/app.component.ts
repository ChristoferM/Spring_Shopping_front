import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-front';

  public isAuth(): boolean {
    console.log (localStorage.getItem('usuario'));
    
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
